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
    // e.target.value contains whatever the user types into the input

    // Without square brackets (static property name)
    // const obj = { email: "test@example.com" }

    // // With square brackets (dynamic property name)
    // const propertyName = "email"
    // const obj = { [propertyName]: "test@example.com" }
    
    // // Both create: { email: "test@example.com" }
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
