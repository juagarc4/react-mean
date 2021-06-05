import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
export function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/' component={MarvelScreen} />
        </Switch>
      </div>
    </Router>
  )
}
