import React,{useContext} from 'react'
import { dummyContext } from '../context/context'

const Logout = () => {
    const {username, setUsername, isLogin, setIsLogin } = useContext(dummyContext)
  return (
    <div>
      <button onClick={() => { setIsLogin(!isLogin) }}>Logout</button>
    </div>
  )
}

export default Logout
