import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     let navigate = useNavigate()
    return (
        <div className='bg-cyan-100'>
            <button
                onClick={() => navigate('/')}
                className='bg-cyan-500 px-5 py-2 rounded cursor-pointer active:scale-100 transition-all ease-out m-5 text-white'>
                Return to home page
            </button>
            <button
                onClick={() => navigate(-1)}
                className='bg-cyan-500 px-5 py-2 rounded cursor-pointer active:scale-100 transition-all ease-out m-5 text-white'>
                Back
            </button>
        </div>
    )
}

export default Navbar2