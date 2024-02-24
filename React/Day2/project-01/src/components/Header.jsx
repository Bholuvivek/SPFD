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
            <li>Home</li>
            <li>Courses</li>
            <li>Discussion</li>
            <li>Blogs</li>
            <li>Support</li>
        </ul>
    </div>
    </div>
    </>
  )
}