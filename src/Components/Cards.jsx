import React from 'react'
import '../Css/MenOutput.css'
import Card from 'react-bootstrap/Card';

function Cards({data,handleClick}) {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img  src={data.image} />
      <Card.Body>
      <Card.Title className='fs-6'>
            {data.title}
        </Card.Title>
        <Card.Text className='disc'>
            {data.disc}
        </Card.Text>
        <Card.Title>{data.price} <span className='price'>₹1299</span></Card.Title>
        <div className='c-btn'>{data.type}</div>
        <div className='btn btn-success btn-sm ms-4' onClick={()=>handleClick(data)}>Add to cart</div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards
