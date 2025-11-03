// import React from 'react']
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const name = "umaim"
  const age = 18;

  return (
    <>
    <div>
      <Navbar />
    <div className="card">
        <h1>Hello World</h1>
        <p>Hey, i'm {name}</p>
        <p>I'm {age} years old</p>
    </div>
        <Card />
    </div>
    </>
  )
}

export default App