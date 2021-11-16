import React from 'react'
import Profile from '../images/Profilepic.jpg'
import { useState, useEffect } from 'react'

export default function Header() {
    const [timer, settimer] = useState('Real Time')

    const startTime = () => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        settimer(h + ":" + m + ":" + s);
        setTimeout(startTime, 1000);
    }
      
    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
    
    useEffect(() => {
        return startTime();
    },[])

    return (
        <div className="profile-container">
            <div id="timer">{timer}</div>
            <div className="profile">
                <img className="profile-img" src={Profile} alt=""/>
                <div className="profile-text">
                    <p>Hi, my name is</p>
                    <h1>Anne Sullivan</h1>
                    <h2>I build things for the web</h2>
                    <button type="button">Get in Touch</button>
                </div>
            </div>
        </div>
    )
}
