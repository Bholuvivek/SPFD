
import {  ReactNode, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom'
import MenuBar from './component/Appbar/Pages/MenuBar'
import Home from './component/Home/Home'
import Dashboard from './component/Appbar/Pages/Dashboard'
import Products from './component/Appbar/Pages/Product'
import ProtectedRoute from './routes/ProtectedRoute'
import { Button } from '@mui/material'
import { UserType } from './component/User/UserType'



export default function App() {
  const current_user:string = UserType.super_admin
  const [isSignedIn, setIsSignedIn] = useState<boolean>()
  
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false);

    <Navigate to='/' replace={true} />
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Admin>
              <ProtectedRoute isSignedIn={isSignedIn} current_user={current_user}>
                <Dashboard />
              </ProtectedRoute>
              </Admin>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute isSignedIn={isSignedIn} current_user={current_user}>
                <Products />
              </ProtectedRoute>
              }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-5">
            <Button className="btn-danger" onClick={signout}>
              Sign out
            </Button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <Button className="btn-dark" onClick={signin}>
              Sign in
            </Button>
          </div>
        )}
      </BrowserRouter>
    </div>
  )
 function Admin():ReactNode{
  if(isSignedIn && current_user == UserType.super_admin){
    return <Dashboard/>
  } 
  else{
    return <h1>You Can Not be Access this page Please Sign in</h1>
  }
 }
}
