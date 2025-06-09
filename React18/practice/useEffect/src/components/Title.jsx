import React, { useEffect, useState } from 'react'

const Title = () => {
    const [title, setTitle] = useState("")
    useEffect(() => {
      const originalTitle = document.title;
      document.title = title;

      return () => { document.title = originalTitle; }
    }, [title])
    
  return (
    <div>
      <input type="text" style={{ width: "200px" }} onChange={(e) => (setTitle(e.target.value))} />
    </div>
  )
}

export default Title
