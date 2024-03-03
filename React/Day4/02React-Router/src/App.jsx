import { Link, NavLink } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import 'react-dom/client'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import './App.css'

function App() {


  return (
    <>
    <Header/>
    <Home/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
