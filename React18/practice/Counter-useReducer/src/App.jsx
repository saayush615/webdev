import { useReducer } from 'react'
import './App.css'

function App() {
  const reducer = (count,action) => { 
    if (action.type === 'inc') {
      return count+1;
    }
    if (action.type === 'dec') {
      return count-1;
    }
   }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
    The count is: {count}
    <button onClick={() => { dispatch({type: 'inc'}) }}> + </button>
    <button onClick={() => { dispatch({type: 'dec'}) }}> - </button>
    </>
  )
}

export default App
