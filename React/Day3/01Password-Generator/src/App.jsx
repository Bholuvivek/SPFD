import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumber] = useState(false)
  const [charAllow, setChar] = useState(false)
  const [Password, setPassword] = useState("")

  //Creating Function Password Generator

  const passwordGenerator=()=>{
    
  }

  return (
    <>
   <h1>Password Generator</h1>
    </>
  )
}

export default App
