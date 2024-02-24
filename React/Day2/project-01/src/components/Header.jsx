import React from 'react'
import './Header.css'
import logo from '../assets/log.jpg'
const Header = () => {
  return (
    <>
    <div className="my-logo">
        <img src={logo} alt="logo"  />
    </div>
    <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Discussion</li>
            <li>Blogs</li>
            <li>Support</li>
        </ul>
    </div>
    </>
  )
}

export default Header