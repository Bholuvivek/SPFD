import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrease = ()=>{
    setCount(count+1)
  }
  const handleDecrease =()=>{
   if(count ===0) return "Count will not go in minus"
   else setCount(count-1)
  }
  return (
    <>
      <h1>Use State</h1>
        <h2>{count}</h2>
       
        <button onClick={handleDecrease}>Decrease Count</button>
        <button onClick={handleIncrease}>Increase Count</button>

     </>
  )
}

export default App
