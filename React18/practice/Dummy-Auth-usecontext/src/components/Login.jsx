import React,{useContext} from 'react'
import { dummyContext } from '../context/context'

const Login = () => {
    const {username, setUsername, isLogin, setIsLogin } = useContext(dummyContext);
  return (
    <div>
      <form onSubmit={() => { setIsLogin(!isLogin) }}>
        <input type="text" placeholder='Name' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
