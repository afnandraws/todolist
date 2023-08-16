"use client"

import { useEffect, useRef, useState } from "react";
import MultiSelectDropdown from './MultiSelectDropdown'

import styles from './TodoApp.module.css'
import Image from "next/image";
import calendar from '../public/calendar.svg'
import dropdown from '../public/dropdown.svg'

import { useClickAway } from "@uidotdev/usehooks";

import { addTodos, completeTodos, removeTodos } from '../redux/slices/todoSlice'
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoApp = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todoReducer)
  console.log(todo)

    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState();
    const [tags, setTags] = useState()
    const [toggleDate, setToggleDate] = useState(false) //this controls the date input box opening
    const [toggleCompleted, setToggleCompleted] = useState(false)  //this controls the completed tasks opening
    
    const svgRef = useRef()
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
  
    function completeTodo(index) {
      const newTodos = [...todos];
      dispatch(
        completeTodos({index})
      )
        setTimeout(() => {
          newTodos[index].isCompleted = !newTodos[index].isCompleted;
          setTodos(newTodos);
        }, 1000);

      console.log(newTodos)
    }
  
    function removeTodo(index) {
      dispatch(
        removeTodos({index})
      )
    }

    // console.log(todos.filter(n => n.isCompleted))

    return (
    <div className={styles.parent}>
      <div className={styles.bar}>
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

        <div className={styles.todos}>
              {todo.map((todo, index) => (
                <Todo
                  key={index} 
                  index={index}
                  todo={todo}
                />))}
          </div>

        {/* {todos.filter(n => n.isCompleted).length === 0 ? '' : <div onClick={() => {setToggleCompleted(!toggleCompleted); toggleCompleted ? svgRef.current.style.transform = 'rotate(0deg)' : svgRef.current.style.transform = 'rotate(180deg)'}} className={styles.completed}>Completed todos <Image ref={svgRef} alt='dropdown' height={20} src={dropdown}/></div>} */}
        {/* {toggleCompleted ? <Todos todos={todos.filter(n => n.isCompleted)} completed={true}/> : '' }  */}
    </div>

    );
}

export default TodoApp;