import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialTodos = [
  {
    id: uuidv4(),
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
]

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos,
  },
  reducers: {
    delTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((todo) => {
          return todo.id !== action.payload
        }),
      ]
    },
    addTodoItem: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      }

      state.todos = [...state.todos, newTodo]
    },
    setUpdate: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.updatedTitle
        }
        return todo
      })
    },
    toogleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
      console.log(state.todos)
    },
  },
})

// Action creators are generated for each case reducer function
export const { delTodo, addTodoItem, setUpdate, toogleTodo } = todoSlice.actions

export default todoSlice.reducer
