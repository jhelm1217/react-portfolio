// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'


const Title = () => {
  return (
    <h1 style={{ color: "white", textAlign: "center" }}>
      Hello! Thank you for taking time out to visit my Website!
    </h1>
  )
}

export default function Navbar () {
   return <nav className='nav'>
        <ul>
            <li>
                <a href='contact'>Contact</a>
            <li>
                <a href='/journey'>My Journey</a>
            </li>
            <li>
                <a href='/aboutme'>About Me!</a>
            </li>
            </li>
            <li>
                <a href='/projects'>My Projects</a>
            </li>
      </ul>
    </nav>
      // <Title />
 
};

// export default Navbar;
