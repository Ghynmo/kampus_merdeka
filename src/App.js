import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import ContactReview from './components/ContactReview/ContactReview'
import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./store/store";
import store from "./store/store";
import './components/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/contact-review" element={<ContactReview/>} />
          </Routes>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
