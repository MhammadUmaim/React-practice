import React, { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'

const data = useContext(PostDataContext)

const Nav2 = (props) => {
    console.log()
  return (
    <div className='nav2'>
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Product</h5>
        <h5>Contact</h5>
        <h5>{data}</h5>

        <h5>{props.theme}</h5>
    </div>
  )
}

export default Nav2