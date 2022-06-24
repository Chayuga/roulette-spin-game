import { useState } from 'react'
import './App.css'
import Roulette from './Roulette/Roulette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Roulette/>
    </div>
  )
}

export default App
