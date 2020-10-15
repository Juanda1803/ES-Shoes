import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Shoes from '../pages/Shoes'
import ShoesNew from '../pages/ShoesNew'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'
import '../assets/styles/Global.css'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/shoes' component={Shoes} />
        <Route exact path='/shoes/new' component={ShoesNew} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
