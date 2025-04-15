import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef()

  useEffect(() => {
    console.log(`First rendring...`)
    btnref.current.style.backgroundColor = "red"
  },[])

  //useRef : variable jo across re-render persist kare apni value ko
  // then why not use state wo va toh same kam karta h?
  // jab v state ko change karoge toh componet re-render hota h but if will change Ref the componet doesnot re-render 
  // and to use this Ref we use (ref.current)
  

  return (
    <>
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
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => { btnref.current.style.display = "none" }}>Change me</button>
    </>
  )
}

export default App
