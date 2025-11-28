import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState([])
  const user = [
    {
    username: 'umaim',
    age:18,
    city:'karachi',
    partner:'Pyari Tuba♥'
  },
   {
    username: 'umaim',
    age:18,
    city:'karachi',
    partner:'Pyari Tuba♥'
  }
]

  localStorage.setItem('user', JSON.stringify(user))
  const User = JSON.parse(localStorage.getItem('user') || '[]')
  for (let i = 0; i < User.length; i++) {
    const element = User[i];
    console.log(element)
  }
    
  
  const getData = async () => {
    const data = await axios.get('https://picsum.photos/v2/list');
    console.log(data.data)
    setData(data.data)
  }


  return (
    <div>
      <button onClick={getData}>get data</button>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.author}</h2>
          <img src={item.download_url} alt={item.author} width="200" />
        </div>
      ))}
    </div>
  )
}

export default App