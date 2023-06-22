import { useState } from 'react'
import './App.css'
import Device from './components/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Device name="uPhone" price="13000"> </Device>
    <Device name="Samsung" price="11000"> </Device>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
