import React from 'react'
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Container,
  Row,
  Col,
} from 'react-bootstrap'

function Input() {
  return (
    <>
      <h3 className='text-center text-uppercase'>
        Input your District & Sub-district
      </h3>
      <Container className='mt-3'>
        <Row>
          <Col sm={6}>
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
          </Col>
          <Col sm={6}>
            <InputGroup className='mb-3'>
              <DropdownButton
                variant='outline-secondary'
                title='Sub-district'
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
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Input
