import {mockTask} from "./mockData"
import TodoPage from "./Pages/Todo/TodoPage";

function App() {
  return (
    <TodoPage tasks={mockTask}/>
  );
}

export default App;