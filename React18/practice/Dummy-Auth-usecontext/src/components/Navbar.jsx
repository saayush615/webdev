import React,{useContext} from 'react'
import Login from './Login'
import Logout from './Logout'
import { dummyContext } from '../context/context'

const Navbar = () => {
    const {username, setUsername, isLogin, setIsLogin } = useContext(dummyContext)
  return (
    <div>
        <p>{isLogin ? `Hi, ${username}` : 'Please Login'}</p>
        {isLogin ? <Logout /> : <Login />}
    </div>
  )
}

export default Navbar
