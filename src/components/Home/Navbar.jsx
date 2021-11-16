import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo-ALTA.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <img src={Logo} alt="sample-logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="" className="nav-link link-primary">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link link-secondary">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link link-secondary">NEWS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link link-secondary">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
