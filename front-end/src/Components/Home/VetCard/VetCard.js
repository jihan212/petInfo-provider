import React from 'react'
import { Card, Button } from 'react-bootstrap'

const VetCard = (props) => {
    console.log(props.vet);
  return (
    <div className='col m-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.vet.img} />
        <Card.Body>
          <Card.Title>{props.vet.name}</Card.Title>
          <Card.Text>
            Contact: {props.vet.contact} <br />
            Email: {props.vet.email}
          </Card.Text>
          <Button variant='success'>View Details</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default VetCard
