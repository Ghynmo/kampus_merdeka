import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import ContactReview from './components/ContactReview/ContactReview'
import './components/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact-review" element={<ContactReview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
