import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
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

  //  making one component on same file (but ideally aaise nahi karte hai)

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border border-1 border-purple-400">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

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
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn is true</button>} */}
      {/* Above one if showbtn is true then show the button */}
      {/* <Todo></Todo> */}

      {/* To render list we use this method in react */}
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />
        // * Ideally
        return (<div key={todo.title} className="m-4 border border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>)
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
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
