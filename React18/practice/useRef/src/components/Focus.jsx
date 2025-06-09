import React from 'react'
import { useRef } from 'react'

const Focus = () => {
    const inputref = useRef(null)

    const handleFocus = () => { 
    inputref.current.focus()
   }

  return (
    <div>
      <input ref={inputref} type="text" />
      <button onClick={handleFocus}>focus</button> 
    </div>
  )
}

export default Focus
