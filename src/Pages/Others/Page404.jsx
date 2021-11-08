import React from 'react'
import img404 from './404.jpg'
import './page404.css'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <div className="errPage">
            <img src={img404} alt="404img" />
            <h1>Page not Found!</h1>
            <button><Link to="/">Back to home</Link></button>
        </div>
    )
}
