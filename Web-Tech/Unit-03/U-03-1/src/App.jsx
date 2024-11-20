import React from 'react'
import ChildComponent from './components/ChildComponent'
import ResImage from './components/ResImage'

function App() {
  return (
    <div>
      <ChildComponent name="Musharraf" age="10" />
      <ResImage image="https://www.w3schools.com/w3images/lights.jpg" />
    </div>
  )
}

export default App
