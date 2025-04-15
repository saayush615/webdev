import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    alert("count was changed")
    setColor(color + 1)
  }, [count])  
  // useEffect is a hook which takes counts as an argument and if count changes useEffect function get triggred
  // 1. as useEffect get triggred the whole component will render(alert = Hey I will run on every render) and
  //  2. a alert will pop of "count was changed" then 
  // 3. colour will be changed bocz of setColor(color + 1)
  // 4. then again whole componet will rerender(alert = Hey I will run on every render)
  // 5. and finally bcoz color was changed (alert = Hey I am running bcoz color was changed)
  
  return (
    <>
    <Navbar color={"navy " + "blue" + color}/>
      <div>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
