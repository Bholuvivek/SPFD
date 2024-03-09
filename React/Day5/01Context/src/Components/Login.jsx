import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(username, password)
    }
  return (
    <>
    <div>
       <div>
            <input type="text"  name='username'  value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder='Username'/> <br />
            <input type="password"  name='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Password.....'/>
           <button onClick={handleSubmit}>Submit</button>
           </div>
    </div>
    </>
    
  )
}

export default Login