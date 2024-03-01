import { useState } from 'react'
import './App.css'

function App() {
  const [colr, setColor] = useState("olive")

  return (
    <>
     <div className="bgColor-div" style={{backgroundColor: colr, height:'100vh'}}>
        <div className="btn">
          <button onClick={()=> setColor('red')} style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=> setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=> setColor('yellow')} style={{backgroundColor:'yellow'}}>Yellow</button>
          <button onClick={()=> setColor('#202020')} style={{backgroundColor:'#202020', color:'white'}}>Dark</button>
          <button onClick={()=> setColor('pink')} style={{backgroundColor:'pink'}}>Pink</button>
          <button onClick={()=> setColor('green')} style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=> setColor('greenyellow')} style={{backgroundColor:'greenyellow'}}>GreenYellow</button>
          <button onClick={()=> setColor('#FFF')}style={{backgroundColor:'#FFFFFF'}}>White</button>
          <button onClick={()=> setColor('#a52a2a')} style={{backgroundColor:'#a52a2a'}}>Brown</button>
          <button onClick={()=> setColor('#00ffff')} style={{backgroundColor:'#00ffff'}}>Cyan</button>
          <button onClick={()=> setColor('#800080')} style={{backgroundColor:'#800080'}}>Purple</button>

        </div>
  
     </div>
    </>
  )
}

export default App
