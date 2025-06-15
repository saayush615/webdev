import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const User = () => {
    const {username} = useParams();
    const navigate = useNavigate();

    const changeName = (name) => { 
      navigate(`/user/${name}`)
     }
  return (
    <div>
      I am user my name is : {username}
      <button onClick={() => changeName('kaayush')}>Change name</button>
    </div>
  )
}

export default User
