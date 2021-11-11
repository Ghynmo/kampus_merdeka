import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"

import TodoContainer from "./component/TodoContainer"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  )
}

export default App