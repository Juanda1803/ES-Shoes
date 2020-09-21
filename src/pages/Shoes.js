import React, { Fragment } from 'react'

import Navbar from '../components/Navbar'
import ShoesList from '../components/ShoesList'
import logo from '../assets/static/es-shoes.png'
import '../assets/styles/pages/Shoes.css'

class Shoes extends React.Component {
  state = {
    data: [
      {
        id: '1',
        name: 'Juan',
        typeOfArrangement: 'Remonta',
        value: 27000,
        payment: 20000,
        phone: 3023455882,
        description: 'sucios',
        date: 'Lunes 14 de septiembre'
      }
    ]
  }
  render () {
    return (
      <Fragment>
        <Navbar />
        <div className='Shoes'>
          <div className='Shoes__hero'>
            <div className='Shoes__container'>
              <img className='Shoes__container--image' src={logo} alt='logo' />
            </div>
          </div>
        </div>

        <div className='Shoes-search'>
          <div className='Shoes__buttons'>
            <a href='/shoes/new' className='btn btn-primary save'>
              Nuevo Cliente
            </a>
          </div>
          <div className='Shoes__list'>
            <div className='Shoes-list__conatiner'>
              <ShoesList shoes={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Shoes
