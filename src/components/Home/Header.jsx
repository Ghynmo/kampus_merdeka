import React from 'react'
import Profile from '../images/Profilepic.jpg'

export default function Header() {
    return (
        <div class="profile">
            <img class="profile-img" src={Profile} alt=""/>
            <div class="profile-text">
                <p>Hi, my name is</p>
                <h1>Anne Sullivan</h1>
                <h2>I build things for the web</h2>
                <button type="button">Get in Touch</button>
            </div>
        </div>
    )
}
