import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[name, setName] = useState("");

  const handleChange = (e) => { 
    setName(e.target.value);
   }

   const Greet = () => { 
    alert(`Hello Mr ${name}`);
    }

  return (
    <>
      <input type="text" placeholder='Enter Text' onChange={handleChange} />
      <p>Your name is: {name}</p>
      <button onClick={Greet}>Greet</button>
    </>
  )
}

export default App
