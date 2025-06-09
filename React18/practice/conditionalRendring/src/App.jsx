import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey 2 ",
      desc: "I am a good todo 2"
    },
    {
      title: "Hey 3",
      desc: "I am a good todo 3"
    },
  ])

  return (
    <>
    {/* conditional rendring - turnary operator */}
      {/* {showbtn ? <button>This button is true</button> : <button>This button is false</button>}
      <button onClick={() => { setshowbtn(!showbtn) }}>Toogle button</button> */}

      <br />

      {/* conditonal rendering && */}
      {/* {showbtn && <button>This button is true</button>}
      <br />
      <button onClick={() => { setshowbtn(!showbtn) }}>Toggle btn</button> */}

      {todos.map((todo) => { 
        return (
        <div key={todo.title} className="m-8 p-7 border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
        )
       })}


    </>
  )
}

export default App
