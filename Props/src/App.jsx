import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     
     <Card user='Tuba' age={20} friend='Umaim' img='https://plus.unsplash.com/premium_photo-1761952919697-6caf69da9aac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
     <Card user='Umaim' age={19} friend='Wasif' img='https://images.unsplash.com/photo-1761872936185-4ece7c1128ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
     <Card user='Wasif' age={19} friend='Uamim' img='https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
     <Card user='Fardeen' age={19} friend='Wasif' img='https://images.unsplash.com/photo-1761872936599-52b68e9095f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
     <Card user='Hasnain' age={19} friend='Umaim' img='https://images.unsplash.com/photo-1761530622107-7e7767dd5258?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
    </div>
  )
}

export default App