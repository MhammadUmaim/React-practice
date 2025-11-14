import React from 'react'

const App = () => {

  const formHandler = (e)=>{
    e.preventDefault()
    console.log(e.target.firstElementChild.value)
  }
  return (
      <form onSubmit={formHandler}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
        </form>
  )
}

export default App