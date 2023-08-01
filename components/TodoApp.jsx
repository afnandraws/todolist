'use client'

import { useEffect, useState } from "react";
import Todos from "./Todos";
import MultiSelectDropdown from './MultiSelectDropdown'
import styles from './TodoApp.module.css'
import Icon from '../public/calendar.svg'
import Image from "next/image";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState();
    const [toggle, setToggle] = useState(false)
    const [tags, setTags] = useState()
  

    useEffect(() => {
      const temp = localStorage.getItem('todos')
      console.log(temp)
    }, [])
    
    function handleSelected(option) {
      console.log(option)
      setTags(option)
    }

    function addTodo(todo) {
        setTodos([...todos, { text: todo, date: date, tags: tags }]);
        setTags()
        setDate()
    }
  
    function completeTodo(index) {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    }
  
    function removeTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

    useEffect(() => {
      console.log(todos)
    }, [todos])
    
    todos

    return (
    <div className={styles.parent}>
      <div className={styles.container}>
         <input placeholder="Write a new task" type="text" onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }} />
        <div className={styles.date}>
        <button onClick={() => {setToggle(!toggle)}}><Image alt={'calendar'} height={20} src={Icon}/></button>
        {toggle && <input onChange={e => {setDate(e.target.value)}} type="date"/>}
        </div>
        <MultiSelectDropdown tags={tags} handleSelected={handleSelected} options={['notes','calls', 'something else']}/>
        </div>

        <Todos 
          todos={todos}
          date={date}
          tags={tags}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
    </div>

    );
}

export default TodoApp;