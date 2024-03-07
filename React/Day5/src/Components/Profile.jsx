import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const {user}= useContext(UserContext)

    if (!user) return <div>Please Login My Dear...</div>
else{
    return <div>Welcome {user}</div>
}
    
        
    
}

export default Profile