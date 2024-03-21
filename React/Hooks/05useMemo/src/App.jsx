import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  const handleSubmit=
  useMemo(()=>{
    let res = 1;
    for (let i = 1; i <= number; i++) {
      res *=i; 
    }
    return res;
  },[number])

  return (
   <>
   <div><h1>UseMemo Hook Example</h1></div>

<input type="number"
   value={number}
   onChange={(e)=> setNumber(parseInt(e.target.value))}
   />
   


   <p>{handleSubmit}</p>
   </> 

  )
}

export default App
