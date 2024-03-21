import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Reducer from './components/Reducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>USE REDUCE HOOKS</h1>
    <Reducer/>
           
    </>
  )
}

export default App
