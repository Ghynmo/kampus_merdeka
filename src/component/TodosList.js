import React from "react"
import { useSelector } from "react-redux"

import TodoItem from "./TodoItem"

function TodosList() {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <ul style={{ margin: "auto", maxWidth: 900 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodosList
