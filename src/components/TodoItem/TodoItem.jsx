import React from 'react'
import styles from './TodoItem.module.scss'

const TodoItem = ({data}) => {
  console.log(data);
  return (
    <div className={styles["todo-item"]}>
      <p className={styles["todo-item__text"]}>{data.title}</p>
      <input id = {data.i} className={styles["todo-item__checkBox"]} type="checkBox" defaultValue={data.isCompleted} />
      <label htmlFor={data.i} className={styles["todo-item__checkBox-label"]}></label>
    </div>
  )
}

export default TodoItem