import React, { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(() => {
  //   let div = document.createElement('div')
  //   div.innerText = `The value of num is: ${num}`
  //   document.body.appendChild(div)
  // }, [num])

  let aChange = ()=>{
    setA(a + 1)
  }

  let bChange = ()=>{
    setB(b - 1)
  }

  useEffect(()=>{
    console.log('a has changed')
  }, [a])

  useEffect(()=>{
    console.log('b has changed')
  }, [b])


  return (
    <div>
      {/* <h1>The value of num is: {num}</h1>
      <h1>The value of num2 is: {num2}</h1>
      <button onClick={() => { setNum(num + 1) }} onMouseEnter={() => { setNum2(num2 + 10) }}>
        Hover
      </button> */}
      <h1>The value of A is: {a}</h1>
      <h1>The value of B is: {b}</h1>
      <button onClick={() => aChange()}>Change A</button>
      <button onClick={() => bChange()}>Change B</button>
    </div>
  )
}

export default App