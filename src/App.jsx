import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aboutheader from './components/Aboutheader'
import Aboutadvantage from './components/Aboutadvantage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aboutheader/>
   <Aboutadvantage/>
    </>
  )
}

export default App
