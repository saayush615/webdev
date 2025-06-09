import React, { useState, useRef, useEffect} from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)
    const prevCount = useRef(0)

    const IncrementCount = () => { 
        setCount(count+1);
     }

     useEffect(() => {
       prevCount.current = count
     }, [count])
     

  return (
    <div>
      <h3>Current count: { count }</h3>
      <h3>Previous count: { prevCount.current }</h3>
      <button onClick={IncrementCount} >Increment</button>
    </div>
  )
}

export default Increment
