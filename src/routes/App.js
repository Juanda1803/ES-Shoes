import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Shoes from '../pages/Shoes'
import '../assets/styles/Global.css'

const App = () => (
  <BrowserRouter>
    <Route exact path='/shoes' component={Shoes} />
  </BrowserRouter>
)

export default App
