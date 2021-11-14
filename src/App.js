import Home from "./components/Home";
import "./App.css"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

// import FormPage from "./Form/FormPage";
// import Search from "./Form/Search";
// function App() {
//   return (
//     <>
//       <FormPage />
//       <Search />
//     </>
//   );
// }

// export default App;
