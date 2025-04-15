import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      I am a nav bar and the counter is {count}
    </div>
  )
}

export default Navbar
