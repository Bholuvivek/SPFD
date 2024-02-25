import { useState } from 'react'

import './App.css'
import Temperature from './components/Temperature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Temperature/>
    </>
  )
}

export default App
