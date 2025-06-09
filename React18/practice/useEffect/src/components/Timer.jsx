import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
      const id = setInterval(() => {
        setSeconds((prevsec) => prevsec + 1)
      }, 1000);

      return () => { clearInterval(id) }
    }, [])

    
    
    
  return (
    <div>
      You are here from {seconds} seconds.
    </div>
  )
}

export default Timer
