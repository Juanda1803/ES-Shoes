import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/static/es-shoes.png'
import '../assets/styles/components/Navbar.css'

class Navbar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <Link to='/'>
          <img className='navbar__image' src={logo} alt='Logo' />
        </Link>
      </div>
    )
  }
}

export default Navbar
