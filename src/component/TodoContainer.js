import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

function TodoContainer() {
  return (
    <div>
      <div>
        <Header />
        <InputTodo />
        <TodosList />
      </div>
    </div>
  )
}
export default TodoContainer
