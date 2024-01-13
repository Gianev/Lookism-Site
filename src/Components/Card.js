import React from 'react'
import "./styles.css"

function Card({props}) {
  return (
     <a href = {props.href} target = "_blank"  rel = "noreferrer" className='card'>  
        <figure className='card'>
              <img src={props.img} 
              alt ="No Image" />
        </figure>
        <p>{props.name}</p>
        <p>{props.rating}</p>
    </a>
  )
}

export default Card