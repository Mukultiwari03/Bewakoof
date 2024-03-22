import React from 'react'
import '../Css/MenOutput.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function MenOutput(props) {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
      <Card.Title className='fs-6'>
            {props.data.title}
        </Card.Title>
        <Card.Text className='disc'>
            {props.data.disc}
        </Card.Text>
        <Card.Title>{props.data.price} <span className='price'>₹1299</span></Card.Title>
        <div className='c-btn'>{props.data.type}</div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MenOutput
