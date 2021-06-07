import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { DashboardRoutes } from './DashboardRoutes'
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { AuthContext } from 'auth/AuthContext'
export function AppRouter() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}
