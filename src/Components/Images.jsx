import React from 'react'

function Images(props) {
  return ( <div className='d-flex flex-column align-items-center'>
          <img src={props.data.image} height={props.heaight} alt="" />
          <p>{props.data.title}</p>
        </div>
  )
}

export default Images
