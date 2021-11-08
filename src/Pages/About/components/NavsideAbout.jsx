import React from 'react'
import { Link } from 'react-router-dom'

export default function NavsideAbout() {
    return (
        <ul className="nav-links">
            <li><Link to='/' className="navlink-about">Home</Link></li>
            <li><Link to='about-app' className="navlink-about">About App</Link></li>
            <li><Link to='about-author' className="navlink-about">About Author</Link></li>
        </ul>
    )
}
