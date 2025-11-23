import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='parent'>
            <div className="logo">My Website</div>
            <div className="links">
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar