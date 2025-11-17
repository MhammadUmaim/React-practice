import React from 'react'

const App = () => {

  const user = {
    username: 'umaim',
    age:18,
    city:'karachi',
    partner:'Pyari Tuba♥'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const User = localStorage.getItem('user')
  console.log(User)
  
  return (
    <div>App</div>
  )
}

export default App