import React from 'react'
import "./about.css";
import NavsideAbout from './components/NavsideAbout';
// import AboutApp from './components/AboutApp';
// import AboutAuthor from './components/AboutAuthor';
import { Outlet } from 'react-router';

export default function About() {

    return (
        <div className="about-container">
            <NavsideAbout/>

            <Outlet/>
            {/* <AboutApp/> */}
            {/* <AboutAuthor/> */}
        </div>
        
    )
}
