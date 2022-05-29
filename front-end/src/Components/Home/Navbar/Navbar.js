import React from 'react'
import logo from '../../../images/logo.png'

function Navbar() {
  return (
    <nav className='navbar bg-transparent'>
      <div className='container-fluid'>
        <a
          className='navbar-brand mb-0 fs-3 fst-italic fw-bold text-reset'
          style={{ textDecoration: 'none' }}
          href='/'
        >
          <img src={logo} alt="" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
