import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    console.log(title)
    setTitle('')
  }

  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        placeholder='Enter your name'
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
      />

      <button>Submit</button>
    </form>
  )
}

export default App