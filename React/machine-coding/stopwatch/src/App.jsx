import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './components/Stopwatch'
import Carousel from './components/Carousel'
import Modal from './components/Modal'
import useVisibility from './hooks/useVisibility'

function App() {
  const [count, setCount] = useState(0)
  const { isVisible, show, hide, toggle } = useVisibility(false);

  return (
    <>
      {/* <Stopwatch /> */}
      {/* <Carousel /> */}
    <div className="App">
      <h1>Custom Hook Example</h1>
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
    </>
  )
}

export default App
