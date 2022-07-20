import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

import styles from "./TodoList.module.scss"

const TodoList = ({todos}) => {
  return (
    <div className = {styles["todo-list"]}>
      {
        todos.map((todo,i)=>(
          <TodoItem data = {{...todo,i}} key = {i}/>
        ))
      }
    </div>
  )
}

export default TodoList