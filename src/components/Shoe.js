import React from 'react'

import Header from './Header'
import '../assets/styles/components/Shoe.css'

class Shoe extends React.Component {
  render () {
    return (
      <div className='shoes'>
        <Header />
        <div className='shoes__container'>
          <img
            className='shoes__container--image'
            src='https://www.gravatar.com/avatar/839e0a3ae605a14074abc124e9cc7d0b?d=identicon'
            alt='Profile'
          />
          <h1>
            {this.props.name} <br />
            {this.props.typeOfArrangement}
          </h1>
        </div>
        <div className='shoes__container--info'>
          <h2>{this.props.phone}</h2>
          <h2>{this.props.value}</h2>
          <h2>{this.props.payment}</h2>
          <h2 className='shoes-info__description'>{this.props.description}</h2>
        </div>
        <div className='shoes__container--date'>
          <h2>{this.props.date}</h2>
        </div>
      </div>
    )
  }
}

export default Shoe
