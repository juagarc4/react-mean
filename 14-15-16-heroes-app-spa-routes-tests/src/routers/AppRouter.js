import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { DashboardRoutes } from './DashboardRoutes'
import { LoginScreen } from '../components/login/LoginScreen'
export function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  )
}
