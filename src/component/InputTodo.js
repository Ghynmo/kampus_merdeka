import { useState } from "react"
import { useDispatch } from "react-redux"

import styles from "./InputTodo.module.css"
import { addTodoItem } from "../store/todoSlice"

function InputTodo() {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTodoItem(title))
      setTitle("")
    } else {
      alert("Please write item")
    }
  }

  let disableButton = false
  if (parseInt(title)) {
    disableButton = true
  } else {
    disableButton = false
  }
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.5,
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input type="text" className="input-text" placeholder="Add todo..." value={title} name="title" onChange={onChange} />
      <button className="input-submit" disabled={disableButton} style={disableButton ? completedStyle : null}>
        Submit
      </button>
    </form>
  )
}
export default InputTodo
