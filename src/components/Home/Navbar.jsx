import React from 'react'
import Logo from '../images/logo-ALTA.png'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div class="container">
                <img src={Logo} alt="sample-logo"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="" class="nav-link link-primary">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link link-secondary">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link link-secondary">EXPERIENCE</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact_us.html" class="nav-link link-secondary">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
