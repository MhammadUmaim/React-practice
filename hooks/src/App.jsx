import React, { useState } from 'react'

const App = () => {

  // const [para, setPara] = useState('')
  const [user, setUser] = useState(10)
  // const [count, setCount] = useState(0)
  // function countPlus() {
  //  return setCount(count+1)
  // }
  // function countMinus() {
  //   if (count === 0) {
  //     return
  //   }
  //   setCount(count-1)
  // }
  // function jump5() {
  //   setCount(count+5)
  // }

  // function showPara(elem) {
  //   console.log(elem.target.value)
  //  setPara(elem.target.value) // set function runs asyncrhonusly..
  // }

  const btnClicked = () => {
    setUser(prev => prev + 1)
    setUser(prev => prev + 1)
    setUser(prev => prev + 1)
  }

  return (
    <div>
      {/* <h1 className='bg-amber-200 w-fit p-5 text-4xl '>{count}</h1>
      <button onClick={countPlus} className='bg-black text-white text-3xl flex item-center justify-center m-5 rounded-full p-5'>+</button>
      <button onClick={countMinus} className='bg-black text-white text-3xl flex item-center justify-center m-5 rounded-full p-5'>-</button>
      <button onClick={jump5} className='bg-black text-white text-3xl flex item-center justify-center m-5 rounded-full p-5'>Jump By 5</button> */}
      {/* <input className='border m-10 p-5' type="text" placeholder='Enter Anything to check' onChange={showPara} />
       <h2>{para}</h2> */}

      <h1 className='text-4xl bg-cyan-50'>The user name is: {user}</h1>
      <button className='border p-5' onClick={btnClicked}>click me</button>
    </div>
  )
}

export default App