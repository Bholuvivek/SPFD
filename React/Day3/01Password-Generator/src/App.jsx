import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumber] = useState(false)
  const [charAllow, setChar] = useState(false)
  const [password, setPassword] = useState("")

  //Creating Function Password Generator

  const passwordGenerator=useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
  }, [length, numberAllow,charAllow, password, setPassword])
    
  

  return (
    <>
   <h1>Password Generator</h1>
    </>
  )
}

export default App
