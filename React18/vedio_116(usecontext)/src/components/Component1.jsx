import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
      This is {counter}
    </div>
  )
}

export default Component1
