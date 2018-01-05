import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import './app.scss'

import Dashboard from 'views/Dashboard'
import Portfolio from 'views/Portfolio'
import Account from 'views/Account'

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/account' component={Account} />
  </Router>
)

render(
  <App />,
  document.querySelector('#app')
)
