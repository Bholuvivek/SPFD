
import { useState, React } from 'react'
import mob from '../assets/mob.png'
import './Temperature.css'
const Temperature = () => {

  const [temperature, setTemp] = useState(12);
  const [color, setColor] = useState('#2fff10')
  function addTemp(){
    setTemp(temperature+1);
    if(temperature >18){
      setColor('red')
    
    }
  }
  function minusTemp(){
    setTemp(temperature-1);
    if(temperature<19){
      setColor('green')
    }
  }
  return (
   <>
   <div className="main">
    <div className="mobile"><img src={mob} alt="" /></div>
    <div className="temperature-div">
      <div className='clock' style={{background:color}}><h2>{temperature}°C</h2></div>
      <div className="btn">
      <button onClick={addTemp}>+</button>
      <button onClick={minusTemp}>-</button>
      </div>
      
    </div>
   </div>
   </>
  )
}

export default Temperature