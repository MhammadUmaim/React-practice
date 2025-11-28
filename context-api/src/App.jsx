import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ThemeContext from './context/ThemeContext'

const App = () => {

const [theme, setTheme] = useState('light')


  return (
    <ThemeContext>
      <div>
        <Navbar theme={theme} />
      </div>
    </ThemeContext>
  )
}

export default App
        