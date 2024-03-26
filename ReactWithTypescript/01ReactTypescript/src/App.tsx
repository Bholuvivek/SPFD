import { useState } from 'react'
import './App.css'

function App() {
  
  const [count,setCount] = useState<number>(0)

  return (
    <>
    <div className="bg-green-500 h-72 w-72 rounded-md shadow-md text-red-800">
      <div className='bg-white m-8 py-6 rounded-md text-3xl'>
        <h2 >{count}</h2>
        </div>
      <div className='flext justify-between m-0'>
        <button className='m-2 text-black rounded-lg w-18 h-8 text-center p-2 hover:bg-red-500 bg-slate-300'
        onClick={()=>setCount(0)}
        >Reset</button>
        <button className='m-2 text-black rounded-lg w-18 h-8 p-2 hover:bg-red-500 bg-slate-300'
        onClick={()=> {if(count >0)setCount(count-1)
        else{alert("There is no count ")}}}
        >Prev</button>
        <button className='m-2 text-black rounded-lg w-18 h-8 p-2 hover:bg-red-500 bg-slate-300'
        onClick={()=>setCount(count+1)}
        >Next</button>
        </div>
    </div>
    
    </>
  )
}

export default App
