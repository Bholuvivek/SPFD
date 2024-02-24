import React from 'react'
import './Header.css'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <>
    <div className="header">
    <div className="my-logo">
        <img src={logo} alt="logo" style={{width:'50px'}}  />
    </div>
    <div className="nav-item">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}
export default Header