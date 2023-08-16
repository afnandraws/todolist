import styles from './Todo.module.css'

import Image from 'next/image';
import uncheck from '../public/uncheck.svg'
import check from '../public/check.svg'
import menu from '../public/menu.svg'
import dropdown from '../public/dropdown.svg'
import plus from '../public/plus.svg'

import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

import { useDispatch, useSelector } from 'react-redux';
import { addTasks, completeTasks, completeTodos, removeTodos } from '../redux/slices/todoSlice';

const Todo = ({ todo, index }) => {
    const [menuVisibility, setMenuVisibility] = useState(false) //this will make the menu visible
    const [complete, setComplete] = useState(false)
    
    const [subtasksContainerVisibility, setSubtasksContainerVisibility] = useState(false) //this will make the subtasks visible
    const [subtasksVisibility, setSubtasksVisibility] = useState(true) //this will make the subtasks visible
    console.log(todo.subtasks)
    const dispatch = useDispatch()

    const menuRef = useClickAway(() => {
      setMenuVisibility(false);
    }); // this uses useClickAway hook to close the menu when a click is registered outside of the menu

    function addSubtask() {
      dispatch(
        addTasks({
          index: index,
          text: 'test'
        }
        ))
    }

    function completeSubtask(subtaskIndex) {
      dispatch(
        completeTasks({
          index: index,
          subtaskIndex: subtaskIndex,
        }
        ))
    }

    function completeTodo() {
      setComplete(!complete)
      dispatch(
        completeTodos({index})
      )
    }
  
    function removeTodo() {
      dispatch(
        removeTodos({index})
      )
    }


    // function toggleSubtask(index) {
    //   const newSubtasks = [...subTasks];
    //   newSubtasks[index].isCompleted = !newSubtasks[index].isCompleted;
      
    //   setSubTasks(newSubtasks);
    // }
 
    return (
      <>
        <div className={styles.container}>
        <div 
          className={styles.todos}  
          style={{textDecoration: complete ? "line-through" : ""}}
        >
          
        <div className={styles.leftside}>
        <Image onClick={() => completeTodo()} alt='checkbox' src={complete ? check : uncheck} height={25}/>
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
            <span onClick={() => {setSubtasksContainerVisibility(!subtasksContainerVisibility)}}>{subtasksContainerVisibility ? 'Remove' : 'Add'} Subtasks</span>
          </div>}

        {subtasksContainerVisibility && <div className={styles.subtaskscontainer}>
          <div className={styles.subtasksdropdown}>
            <Image className={styles.svg} src={dropdown} height={20} alt="dropdown" onClick={() => {setSubtasksVisibility(!subtasksVisibility)}}/>
            <span>{todo.subtasks.length} subtasks {todo.subtasks.length > 0 && `(0/${todo.subtasks.length} completed)`}</span>
          </div>

          {subtasksVisibility && <div className={styles.subtasks}>
            {todo.subtasks.map((task, subtaskIndex) => (
              <div key={subtaskIndex}>
                  <Image alt='checkbox' onClick={() => {completeSubtask(subtaskIndex)}} src={todo.subtasks[subtaskIndex].isCompleted ? check : uncheck} height={23}/>
                  <span>{task.text}</span> 
              </div>
            ))}
            <div>
              <Image className={styles.img} alt='add subtask' src={plus} height={23}/>
              <span onClick={addSubtask}>Add a new subtask</span>
            </div>
          </div>}
        </div>}
        </div>
      </>
      );
}
 
export default Todo;