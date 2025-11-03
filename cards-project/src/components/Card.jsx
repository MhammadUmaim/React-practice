import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  console.log(props.company)
  return (
     
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>save <Bookmark size={23} color="#000000" strokeWidth={1} />  </button>
        </div>
        <div className="center">
          <h3>{props.company}</h3>
          <span>{props.postDate}</span>
          <h2>{props.role}</h2>
          <div className="btns">

          <button className='tag1'>{props.tag1}</button>
          <button className='tag2'>{props.tag2}</button>
          </div>

        </div>
        <hr />
        <div className="footer">
          <div className="footer-left">
          <h3>{props.pay}</h3>
          <span>{props.location}</span>
          </div>
          <div className="footer-right">
            <button>Apply now</button>
          </div>
        </div>
      </div>
  )
}

export default Card