import React from 'react'

import error from '../assets/static/image-404.jpg'
import '../assets/styles/pages/NotFound.css'

const NotFound = () => {
  return (
    <div className='notFound'>
      <img className='notFound__image' src={error} alt='Error 404' />
    </div>
  )
}

export default NotFound
