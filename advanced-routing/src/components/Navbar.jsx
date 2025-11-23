import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-cyan-950 flex items-center justify-between py-5 px-10 text-xl text-white'>
            <h2 className='text-2xl'>My website</h2>
            <div className='flex gap-10 '>
                <Link className='cursor-pointer hover:underline' to='/'>Home</Link>
                <Link className='cursor-pointer hover:underline' to='/about'>About</Link>
                <Link className='cursor-pointer hover:underline' to='/courses'>Courses</Link>
                <Link className='cursor-pointer hover:underline' to='/contact'>Contact</Link>
                <Link className='cursor-pointer hover:underline' to='/products'>Products</Link>
               
            </div>
        </div>
    )
}

export default Navbar