import React from 'react'

class ShoesList extends React.Component {
  render () {
    return (
      <ul className='ShoesSearch-list__conatiner--unstyled'>
        {this.props.shoes.map(shoes => {
          return (
            <li key={shoes.id}>
              <p>
                {shoes.name}
                {shoes.typeOfArrangement}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ShoesList
