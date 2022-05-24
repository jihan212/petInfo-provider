import React from 'react'
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from 'react-bootstrap'

function Input() {
  return (
    <>
      <h3 class='text-center text-uppercase'>
        Input your District & Sub-district
      </h3>
      <InputGroup className='mb-3'>
        <DropdownButton
          variant='outline-secondary'
          title='District'
          id='input-group-dropdown-1'
        >
          <Dropdown.Item href='#'>Dhaka</Dropdown.Item>
          <Dropdown.Item href='#'>Rajshahi</Dropdown.Item>
          <Dropdown.Item href='#'>Chittagong</Dropdown.Item>
          <Dropdown.Item href='#'>Borishal</Dropdown.Item>
          <Dropdown.Item href='#'>Sylhet</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label='Text input with dropdown button' />
      </InputGroup>
      <InputGroup className='mb-3'>
        <DropdownButton
          variant='outline-secondary'
          title='Sub-district'
          id='input-group-dropdown-1'
        >
          <Dropdown.Item href='#'>Action</Dropdown.Item>
          <Dropdown.Item href='#'>Another action</Dropdown.Item>
          <Dropdown.Item href='#'>Something else here</Dropdown.Item>
          <Dropdown.Item href='#'>Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label='Text input with dropdown button' />
      </InputGroup>
    </>
  )
}

export default Input
