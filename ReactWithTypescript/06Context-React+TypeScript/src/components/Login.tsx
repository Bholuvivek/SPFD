import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext.js'

interface userData{
  username:string;
  password:string;
}
const Login = () => {
  const [username, setUsername] = useState<userData>(); // Specify the type for username
  const [password, setPassword] = useState<userData>();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => { // Fix the typo in preventDefault()
    e.preventDefault(); // Fix typo
    setUser({ username, password });
    console.log(username, password); // Logging username and password instead of user
  }

  return (
    <>
      <div>
        <div>
          <h2>Login</h2>
          <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
          {" "}
          <input type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password' />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Login
