import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { PostDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

  // `ThemeDataContext` in your provider is a string (e.g. 'Sarthak').
  // Using array destructuring `const [data] = useContext(...)` will
  // treat the string as an iterable and assign its first character
  // to `data` (that's why you were seeing only the first letter).
  // Read the context value directly instead:
  const data = useContext(PostDataContext)

  console.log(data)
  return (
    <div className='nav'>
        <h1>{data}</h1>
        <Nav2 theme={props.theme}>
          <h2>Umaim</h2>
          <h2>I'm</h2>
        </Nav2>
    </div>
  )
}

export default Navbar