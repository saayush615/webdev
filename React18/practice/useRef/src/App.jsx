import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Focus from './components/Focus'
import Counter from './components/Counter'
import Increment from './components/Increment'

function App() {

  return (
    <>
      <Focus />
      <Counter />
      <Increment />
    </>
  )
}

export default App
