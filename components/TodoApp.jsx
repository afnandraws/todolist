"use client"

import { useState } from "react";
import MultiSelectDropdown from './MultiSelectDropdown'

import styles from './TodoApp.module.css'
import Image from "next/image";
import calendar from '../public/calendar.svg'
import tick from '../public/tick.svg'

import { useClickAway } from "@uidotdev/usehooks";

import { addTodos } from '../redux/slices/todoSlice'
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoReducer)
  
  const [date, setDate] = useState();
  const [tags, setTags] = useState()
    
  const [toggleDate, setToggleDate] = useState(false) //this controls the date input box opening
  const [toggleCompleted, setToggleCompleted] = useState(false)  //this controls the completed tasks opening
    
  const dateRef = useClickAway(() => {
    setToggleDate(false);
  }); // this uses useClickAway hook to close the menu when a click is registered outside of the menu

    function handleSelected(option) {
      setTags(option)
    }


    function addTodo(todo) {
      if (todo) {
        dispatch(
          addTodos({
            todo: todo,
            date: date,
            tags: tags,
          })
        );

        setTags()
        setDate(undefined)
        setToggleDate(false)
        setToggleCompleted(false)
      }
    }

    return (
    <div className={styles.parent}>
      <div className={styles.bar}>
      <div className={styles.completeToggle} onClick={() => setToggleCompleted(!toggleCompleted)}><Image alt="tick" src={tick} style={toggleCompleted && { backgroundColor: 'rgb(114, 212, 135)' }} height={20}/></div>
      <div className={styles.container}>
         <input placeholder="Write a new task" autoFocus type="text" onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }} />
        <div className={styles.date} ref={dateRef}>
        <button onClick={() => {setToggleDate(!toggleDate)}}><Image alt='calendar' height={20} src={calendar}/></button>
        {toggleDate && <input onChange={e => {setDate(e.target.value)}} type="date"/>}
        </div>
        </div>
        <MultiSelectDropdown tags={tags} handleSelected={handleSelected} options={['notes','calls', 'other']}/>
        </div>

        { toggleCompleted ?
        <div className={styles.todos}>
        {todo.map((todo, index) => (
                todo.isCompleted &&
                <Todo
                  key={index} 
                  index={index}
                  todo={todo}
                />
        ))} 
        </div>
        :
        <div className={styles.todos}>
        {todo.map((todo, index) => (
          !todo.isCompleted &&
          <Todo
            key={index} 
            index={index}
            todo={todo}
          />))}
    </div>
        }
    </div>

    );
}

export default TodoApp;