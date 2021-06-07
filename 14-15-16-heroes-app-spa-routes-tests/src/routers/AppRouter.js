import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { DashboardRoutes } from './DashboardRoutes'
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { AuthContext } from 'auth/AuthContext'
export function AppRouter() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
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
