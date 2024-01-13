import React from 'react'


function lookingAt(props) {

  return (
    <div className='lookinAt'>
        <h1 className='text2'>LOOKISM</h1>
       <h3 className='text'>You are looking at: {props.name}</h3>
    </div>
  )
}

export default lookingAt