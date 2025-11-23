import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center items-center py-6 gap-10'>
        <Link className='cursor-pointer hover:underline' to='/products/mens'>Mens</Link>
        <Link className='cursor-pointer hover:underline' to='/products/womens'>Womens</Link>
        <Link className='cursor-pointer hover:underline' to='/products/kids'>Kids</Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default Product