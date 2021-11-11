import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import TodoContainer from "./component/TodoContainer"
import { store, persistor } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={process.env.PUBLIC_URL}>
          <TodoContainer />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
