import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain value change
  useEffect(() => {
    alert("Hey I am running bcoz color was changed")
  }, [color])

  // Example of cleanup function : basically this retrun statement appear when the <Navbar/> is unmounted or commented out
  useEffect(() => {
    alert("Hey this is the first render of app.jsx")
    return () => { 
      alert("component was unmounted")
     }
  }, [])
  
  return (
    <div>
      I am a Navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
