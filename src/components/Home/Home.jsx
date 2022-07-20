import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import styles from "./Home.module.scss"

const Home = () => {
  const [todos , setTodos] = useState([
  {
    title : "New todo",
    isCompleted : false,
  },
  {
    title : "New todo",
    isCompleted : false,
  },
  {
    title : "New todo",
    isCompleted : false,
  },
  {
    title : "New todo",
    isCompleted : false,
  },
]);

  return (
    <div className={styles.home}>
        <TodoList todos = {todos} />
    </div>
  )
}

export default Home