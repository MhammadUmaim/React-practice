import React from 'react'

const App = () => {

    const btnClicked = () => {
        console.log("clicked!")
    }

    const MouseEnter = ()=>{
        console.log("Mouse Entered")
    }
    const change = ()=>{
        let data = document.getElementById('taxt')
        console.log(data.value)
    }
    
    return (
        <>
           <div className="parent" onWheel={(e)=>{
            let speed = e.deltaY
            if (speed>0) {
                console.log('seedha scrolling')
            }else {
                console.log('ulta scrolling')
            }
           }}>
            <div className="page1 h-screen bg-amber-200"></div>
            <div className="page2 h-screen bg-amber-500"></div>
            <div className="page3 h-screen bg-amber-700"></div>
            
            
           </div>
        </>

    )
}

export default App