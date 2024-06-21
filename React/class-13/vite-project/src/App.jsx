import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Welcome'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Welcome name="ayush"/>
       
    </>
  )
}

export default App
