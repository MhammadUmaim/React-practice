import React from 'react'

const App = () => {
  return (

    <div className='h-screen lg:flex justify-between bg-black text-white p-5'>

      <form className='flex flex-col gap-4 p-5 lg:w-1/2 '>


        <input
          className='border border-gray-300 rounded-md p-4 w-full outline-none'
          type="text"
          placeholder="Enter Note Title"
        />

        <textarea
          className='border border-gray-300 rounded-md p-5 w-full outline-none h-32'
          placeholder="Enter Note Content">
        </textarea>

        <button
          type="submit"
          className='bg-white text-black p-2 rounded font-medium text-lg w-full'>
          Add Note
        </button>
      </form>

      <div className=' lg:w-1/2 p-5 rounded-lg mt-5 lg:mt-0'>

      <h1 className='text-center text-4xl font-extralight'>Your Notes</h1>

      <div className="cards">
        <div className='h-20 w-20 bg-white rounded-2xl'>
        </div>
      </div>

      </div>

    </div>
  )
}

export default App