import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import './app.scss'

import Index from 'views/Index'
import Other from 'views/Other'

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Index} />
    <Route path='/other' component={Other} />
  </Router>
)

render(
  <App />,
  document.querySelector('#app')
)
