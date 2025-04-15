import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <div>
      This is Navbar
    </div>
    <Button/>
    {/* if not this we can accept prop and do  <Button count={prop.count} /> */}
    </>
  )
}

export default Navbar
