import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => { 
        if(!res.ok){
          throw new Error('Something went wrong');
        }
        return res.json();
     })
     .then((data) => { 
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => { 
          setError(err.message);
          setLoading(false);
       })
   }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>There is an error : {error}</p>
  }

  return (
    <>
      <h2>📚 Blog Posts</h2>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: "1rem" }}>
          <h3>{post.name}</h3>
          <p>{post.email}</p>
        </div>
      ))}
    </>
  )
}

export default App
