import { useState } from 'react'

import './App.css'

function App() {

   const [count, setCounter]  = useState(0)

  
  const addCount = () =>{
    setCounter(count+1)
  }
  
 

  const removeCount = () => {
    if(count>0){
     
    setCounter(count - 1)
  }
  else{
    const message= document.querySelector('.erro')
   message.innerHTML = "Sorry The Counter is  Zero"
  }
  }
  
  return (
    <>
    <h1>Let's Create Plus and Minus </h1>

    <h3 className='erro'></h3>
    <h2>Counter Value is :{count}</h2>
    <button onClick={addCount} >Click Here To Increase VAlue</button><br /> <br />

    <button onClick={removeCount}>Click Here to Decrese Counter </button>
    </>
    )
}

export default App