import Image from 'next/image';
import styles from './Todo.module.css'
import uncheck from '../public/uncheck.svg'
import check from '../public/check.svg'
import menu from '../public/menu.svg'
import { useState } from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    function menuToggle() {
      setMenuVisibility(!menuVisibility)
    }

    return (
        <div className={styles.container}>
        <div 
          className={styles.todos}  
          style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
          
        <div className={styles.leftside}>
        <Image onClick={() => completeTodo(index)} alt='checkbox' src={todo.isCompleted ? check : uncheck} height={25}/>
        <p>{todo.text}</p>
        </div>
   
        <div className={styles.rightside}>
        <Image src={menu} height={15} alt='menu' onClick={() => menuToggle()}/>
        </div>
        </div>
        {menuVisibility && <div className={styles.menu}><span onClick={() => {removeTodo(index); setMenuVisibility(false)}}>Remove</span></div>}
        </div>
      );
}
 
export default Todo;