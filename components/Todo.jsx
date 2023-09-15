import styles from './Todo.module.css'

import Image from 'next/image';
import uncheck from '../public/uncheck.svg'
import check from '../public/check.svg'
import menu from '../public/menu.svg'
import dropdown from '../public/dropdown.svg'
import plus from '../public/plus.svg'

import { useRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

import { useDispatch } from 'react-redux';
import { addTasks, completeTasks, completeTodos, removeTodos } from '../redux/slices/todoSlice';
import { db } from './indexedDB/db';

const Todo = ({ todo, index }) => {
    const [menuVisibility, setMenuVisibility] = useState(false) //this will make the menu visible
    const [subtasksContainerVisibility, setSubtasksContainerVisibility] = useState(false) //this will make the subtasks visible
    const [subtasksVisibility, setSubtasksVisibility] = useState(true) //this will make the subtasks visible
    
    const [addsubtaskInput, setAddSubtaskInput] = useState(true)
    const subtaskRef = useRef()
    const svgRef = useRef()

    const dispatch = useDispatch()

    const menuRef = useClickAway(() => {
      setMenuVisibility(false);
    }); // this uses useClickAway hook to close the menu when a click is registered outside of the menu
    
    async function completeTodo() {
        dispatch(completeTodos({index}))

        const indexedDBvalue = await db.todos
				.where({id: todo.id})
				.first()
      
        const toggle = !indexedDBvalue.isCompleted
      
        await db.todos.update(todo.id, {isCompleted: toggle});
    }
      
    async function removeTodo() {
        dispatch(removeTodos({index}))

        await db.todos
			  .where({id: todo.id})
			  .delete(1)

    }

    async function addSubtask(event) {
      if (event.key === 'Enter') {
        dispatch(addTasks({index: index, text: subtaskRef.current.value}))

        const indexedDBvalue = await db.todos
				.where({id: todo.id})
				.first()
      
        console.log(indexedDBvalue.subtasks)
        await db.todos.update(todo.id, {subtasks: [...todo.subtasks, {text: subtaskRef.current.value, isCompleted: false}]});

        setAddSubtaskInput(!addsubtaskInput)
      }
    }

    async function completeSubtask(subtaskIndex) {
      dispatch(
        completeTasks({
          index: index,
          subtaskIndex: subtaskIndex,
        }
        ))

      const indexedDBvalue = await db.todos
			.where({id: todo.id})
			.first()
      
      console.log(indexedDBvalue.subtasks[subtaskIndex])

      const newsubtask = indexedDBvalue.subtasks
      
      newsubtask[subtaskIndex].isCompleted = !newsubtask[subtaskIndex].isCompleted;

      await db.todos.update(todo.id, {subtasks: newsubtask});


    }

    return (
      <>
        <div className={styles.container}>
        <div 
          className={styles.todos}  
          style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
          
        <div className={styles.leftside}>
        <Image onClick={() => completeTodo()} alt='checkbox' src={todo.isCompleted ? check : uncheck} height={25}/>
        <p>{todo.text}</p>
        {todo.tags !== undefined && <div className={styles.tags}>{todo.tags}</div>}
        {todo.date !== undefined && <div className={styles.date}>{todo.date}</div>}
        </div>
   
        <div className={styles.rightside}>
        <Image src={menu} height={15} alt='menu' onClick={() => {setMenuVisibility(!menuVisibility)}}/>
        </div>
        </div>
        {menuVisibility && 
          <div ref={menuRef} className={styles.menu}>
            <span onClick={() => {removeTodo(); setMenuVisibility(false)}}>Remove</span>
            <span>Edit</span>
            <span onClick={() => {setSubtasksContainerVisibility(!subtasksContainerVisibility)}}>{subtasksContainerVisibility ? 'Hide' : 'Add'} Subtasks</span>
          </div>}

        {subtasksContainerVisibility && <div className={styles.subtaskscontainer}>
          <div className={styles.subtasksdropdown}>
            <Image className={styles.svg} src={dropdown} height={20} alt="dropdown" ref={svgRef} onClick={() => {setSubtasksVisibility(!subtasksVisibility); subtasksVisibility ? svgRef.current.style.transform = 'rotate(0deg)' : svgRef.current.style.transform = 'rotate(90deg)'}} />
            <span>{todo.subtasks.length} subtasks {todo.subtasks.length > 0 && `(${todo.subtasks.filter(item => item.isCompleted).length}/${todo.subtasks.length} completed)`}</span>
          </div>

          {subtasksVisibility && <div className={styles.subtasks}>
            {todo.subtasks.map((task, subtaskIndex) => (
              <div key={subtaskIndex}>
                  <Image alt='checkbox' onClick={() => {completeSubtask(subtaskIndex)}} src={todo.subtasks[subtaskIndex].isCompleted ? check : uncheck} height={23}/>
                  <span>{task.text}</span> 
              </div>
            ))}
            <div onClick={() => {setAddSubtaskInput(!addsubtaskInput)}}>
              <Image className={styles.img} alt='add subtask' src={plus} height={23}/>
              {addsubtaskInput ? <span>Add a new subtask</span> : <input placeholder='Add a new subtask' autoFocus ref={subtaskRef} onKeyDown={addSubtask}/>}
            </div>
          </div>}
        </div>}
        </div>
      </>
      );
}
 
export default Todo;