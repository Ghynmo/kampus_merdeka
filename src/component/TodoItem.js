import { useState } from "react"
import { useDispatch } from "react-redux"

import { toogleTodo, delTodo, setUpdate } from "../store/todoSlice"
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => dispatch(toogleTodo(id))} />
        <button onClick={() => dispatch(delTodo(id))}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          dispatch(setUpdate(e.target.value, id))
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem
