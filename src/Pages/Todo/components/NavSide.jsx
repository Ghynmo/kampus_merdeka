import React from 'react'
import "./navside.css";
import {Link} from 'react-router-dom'

export default function NavSide() {

    return (
        <div className="navside-container">
            <span>X</span>
            <ul className="nav">
                <li><Link to='/' className='navlink-home'>Home</Link></li>
                <li><Link to='/about' className='navlink-home'>About</Link></li>
            </ul>
        </div>
    )
}
