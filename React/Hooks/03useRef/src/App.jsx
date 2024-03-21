import { useEffect, useRef, useState} from 'react'

import './App.css'

function App() {
  const[count, setCount] = useState(0)
 
  const handleFocus = useRef(null)

useEffect(()=>{
  handleFocus.current.focus()
},[])

const handleAdd =()=>{
  setCount((previos)=> previos+1)
 
}
const handleMinus =()=>{
  setCount(count -1)

}

const [isPlaying, setIsPlaying] = useState(false)
const ref = useRef(null)

const handleChange = ()=>{
  setnextPlaying = !isPlaying
  setIsPlaying(setnextPlaying)
  if(setnextPlaying){
    ref.current.play()
  }
  else{
      ref.current.pause()
  }
  
}

  return (
    <>
    <div>
<h2>Pouse and Play Using useRef</h2>
<button
onChange={handleChange}
> {isPlaying ? 'Pause' : 'Play'} </button>
<br />
<video
width='200px' 
ref={ref}
onPlay={()=>setIsPlaying(true)}
onPause={()=>setIsPlaying(false)}
>
<source
src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
type='video/mp4'
 />
 </video>

</div>
<br /><br /><br /><br />
    <form action="">
      <input type="text"
      ref={handleFocus}
      />
      <br /> <br /><br />
      <input type="text"
      ref={handleFocus}
      />

    </form>

    <div>
      <h1>Counter</h1>
      <h2>Current Number : {count}</h2>
     
      <button
      onClick={handleAdd}
       >Add</button>
      <br />
       <button
       onClick={handleMinus}
       >Minus</button>
    </div>




    </>
  )
}

export default App
