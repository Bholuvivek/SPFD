import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumber] = useState(false)
  const [charAllow, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // Use Ref Hook

  const passRef = useRef(null)

  //Creating Function Password Generator

  const passwordGenerator=useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //COndition for setNumber

    if(numberAllow) str +="0123456789"
    if(charAllow) str += "~!@#$%^&*()_-+={}[]()?."

    //Genrating the Password
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
    
  useEffect(() => {
    passwordGenerator() 
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
    <div className='main-div'>
      <div className="input-field">
        <input type="text" value={password}  placeholder='Password' 
        ref={passRef}
        readOnly/>
        <button
        onClick={copyPasswordToClipboard}

        >Copy</button>
      </div>
      <div className="flex items-center gap-x-1"> 
      <input type="range" min={6} max={50} value={length} className='cursor-pointer' 
      onChange={(e)=> {setLength(e.target.value)}} />
      <label>Length: {length}</label>
      <input type="checkbox"
      defaultChecked={numberAllow}
      id='numberInput'
      onChange={()=>{setNumber((prev)=> !prev)}}
      
       /> <label htmlFor='numberInput'>Number Alllowed</label>
        <input type="checkbox"
        defaultChecked={charAllow}
        id='charInput'
        onChange={()=> {setChar((prev) =>!prev)}}
         />
         <label htmlFor="charInput">Charaacter Allowed</label>

      </div>
    </div>
    </>
  )
}

export default App
