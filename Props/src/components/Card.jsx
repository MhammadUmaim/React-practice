import React from 'react'

const Card = (props) => {

    console.log(props.user, props.age, props.friend)
    
  return (
     <div className="card">
        <img src={props.img} alt="" />
        <h1>Hello</h1>
        <h4>i'm {props.user} and i'm {props.age}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repudiandae!</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card

