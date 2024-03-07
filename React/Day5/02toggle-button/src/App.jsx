import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {
  const [themeMode, setThemeMode] = useState()

  const darkTheme =()=>{
    setThemeMode('dark')
  }
  const lightTheme =()=>{
    setThemeMode('light')
  }

  // how theme thange
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
<ThemeBtn />
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card /> 

          </div>
        </div>
      </div>
      
    </ThemeProvider>
  )
}

export default App
