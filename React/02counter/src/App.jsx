import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  // let counter = 15
  const addValue = () => {
    if(counter < 20)
    setCounter(counter + 1);
  }
  const decValue = () => {
    if(counter > 0){
  setCounter(counter - 1);
    }
  }


  return (
    <>
     <h2>Chai aur React</h2>
     <h3>Counter Value: {counter}</h3>
     <button onClick={addValue}>Increase</button>
     <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App
