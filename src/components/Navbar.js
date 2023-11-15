import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
        <nav className='main-container'>
          <ul className='Navbar'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Traditional Data</Link>
            </li>
            <li>
              <Link to='/rq-users'>RQ Data</Link>
            </li>
            <li>
              <Link to='/infinit-scrolling'>Infinit Scrolling Data</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar