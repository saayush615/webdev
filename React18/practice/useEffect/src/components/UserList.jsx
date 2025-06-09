import React from 'react'
import { useState, useEffect } from 'react'

const UserList = () => {
    const [user, setUser] = useState([])
    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) =>  res.json() )
    //   .then((data) => setUser(data));
    // }, [])
    
    
  return (
    <div>
      <p>Hello I am user component</p>
      {user.map((usern) => (
        <p key={usern.id}>I am {usern.username}</p>
      ))}
    </div>
  )
}

export default UserList
