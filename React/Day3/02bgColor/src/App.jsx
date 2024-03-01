import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="bgColor-" style={{backgroundColor: color, height:'100vh'}}>
     <h2>Background Changer App</h2>
     </div>
    </>
  )
}

export default App
