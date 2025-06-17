import { useState } from 'react'
import './App.css'
import { DummyProvider } from './context/context'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <DummyProvider>
        <h2>Welcome to app</h2>
        <Navbar />
      </DummyProvider>
    </>
  )
}

export default App
