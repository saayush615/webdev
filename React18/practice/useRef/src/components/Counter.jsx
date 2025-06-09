import React from 'react'
import { useState, useRef } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // To store the interval ID

  const startCounter = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {  // setInterval always returns a id which is used to stop the running of interval
      setCount(prevCount => prevCount + 1); // Please take the most up-to-date value of count (prev) and add 1.
    }, 1000);
    // console.log(intervalRef.current)
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current); // Stop the interval
    intervalRef.current = null; // Reset the ref
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
}

export default Counter
