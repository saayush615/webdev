import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Harry")
  const [form, setForm] = useState({})

  const handleClick = () => { 
    alert("hey i am clicked")
   }

   const handleMouseOver = () =>{
    alert("Hey I am a mouse over")
   }

   const handleChange = (e) => { 
    // setname(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
    }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}

      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name="phone" value={form.phone?form.phone:"" } onChange={handleChange} />
    </>
  )
}

export default App
