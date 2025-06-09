import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={  <> <Navbar /> <Home /> </>} /> 
      <Route path='/about' element={<><Navbar /> <About /></>} />
      <Route path='/user/:username' element={<><Navbar /> <User /></>} />
      <Route path='*' element={<NotFound />} />
    </Routes>


      {/* use <></> or  use Layout.jsx <Navbar /> <outlet /> It is scalable */}
  {/* <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes> */}

  {/* /layouts/MainLayout.jsx */}
  {/* import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout; */}
    </>
  )
}

export default App
