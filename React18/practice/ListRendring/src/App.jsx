import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" }
];

  return (
    <>
      {books.map((book) => { 
        return(
          <div key={book.id}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
          </div>
        )
       })}
    </>
  )
}

export default App
