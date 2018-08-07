import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from 'shared/services/AuthService'

const authService = new AuthService()

const PrivateRoute = ({ component: Component, rest }) => (
  <Route {...rest}
    render={props =>
      authService.isAuthenticated() ? <Component {...props} /> : <Redirect to='/hello' />
    } />
)

export default PrivateRoute
