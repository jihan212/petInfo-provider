import React, { useState } from 'react'
import fakedata from '../../../fakeData/products.json'
import VetCard from '../VetCard/VetCard'
import { CardGroup } from 'react-bootstrap'

const Vet = () => {
  const [vets, setVets] = useState(fakedata)

  console.log(fakedata)
  return (
    <>
      <h3 className='text-center text-uppercase'>
        Available Vets in Your Area
      </h3>
      <CardGroup className='row m-4'>
        {vets.map((vet) => (
          <VetCard vet={vet}></VetCard>
        ))}
      </CardGroup>
    </>
  )
}

export default Vet
