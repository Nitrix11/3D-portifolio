import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apps from '../src/components/Car'
import Laptop from '../src/components/Car'
import Chair from '../src/components/Car'
import Car3D from '../src/components/Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car3D/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
   
      </div> */}
 
    </>
  )
}

export default App
