// import React from 'react'
import mob from '../assets/mob.png'
import './Temperatur.css'
const Temperature = () => {
  return (
   <>
   <div className="main">
    <div className="mobile"><img src={mob} alt="" /></div>
    <div className="temperatur"></div>
   </div>
   </>
  )
}

export default Temperature