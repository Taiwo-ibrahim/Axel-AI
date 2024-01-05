import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className={props.className}>
      <img src={props.img}  alt="" />
      <div className="card-component_text">
        <h1>{props.text}</h1>
        <div className='card-component_text-bullet_container'>
          <div className='card-component_text-bullet'>
            <img src='/bullet.png' alt='' />
            <p>{props.bullet_text_1}</p>
          </div>
          <div className='card-component_text-bullet'>
            <img src='/bullet.png' alt='' />
            <p>{props.bullet_text_2}</p>
          </div>
          <div className='card-component_text-bullet'>
            <img src='/bullet.png' alt='' />
            <p>{props.bullet_text_3}</p>
          </div>
          <div className='card-component_text-bullet'>
            <img src='/bullet.png' alt='' />
            <p>{props.bullet_text_4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card