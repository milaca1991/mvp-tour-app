import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tienda from './Components/Sightseeing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <header>

      <h1>Virtual tour sightseeing in Valletta </h1>
      <img src="./img/valletta.jpg" alt="valletta-header" className='banner'/>
      <button>Go map</button>

      </header>
 

    </div>
  )
}

export default App
