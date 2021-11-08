import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from "./Pages/Todo/Todo";
import './App.css'
import About from "./Pages/About/About";
import AboutApp from './Pages/About/components/AboutApp';
import AboutAuthor from './Pages/About/components/AboutAuthor';
import Page404 from './Pages/Others/Page404';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/about" element={<About/>}>
              <Route path=":about-app" element={<AboutApp/>}/>
              <Route path=":about-author" element={<AboutAuthor/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
    // <>
    //   <About/>
    //   <div className='container'>
    //     <Todo/>  
    //   </div>
    // </>
  );
}

export default App;