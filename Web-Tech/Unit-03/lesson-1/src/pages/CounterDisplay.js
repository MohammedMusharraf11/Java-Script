import React from 'react'
import Counter from '../components/Counter'

function CounterDisplay() {
  return (
    <div>
    <Counter/>
      <h2>Counter Display</h2>
      <h3>Seconds since you have loaded the page</h3>
    </div>
  )
}

export default CounterDisplay
