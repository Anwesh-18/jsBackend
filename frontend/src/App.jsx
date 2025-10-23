import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes') //as proxy setting in vite.config.js its origin is set to localhost:3000
      .then((response) => {
        setJokes(response.data)
      } 
    )
      .catch((error) => {
        console.error('Error fetching jokes:', error)
      }
    )
  })
  return (
    <>
      <div>
        <h1>Anwesh</h1>
        <p>Jokes: {jokes.length}</p>
        {jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
