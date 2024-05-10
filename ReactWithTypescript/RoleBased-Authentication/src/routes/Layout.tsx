
import { Outlet } from 'react-router-dom'
import NavBar from '../component/Appbar/AppBar'
import Home from '../component/Home/Home'

const Layout = () => {
  return (
    <div>
       
        <NavBar/>
        {Outlet}
        
        <Home/>
    </div>
  )
}

export default Layout