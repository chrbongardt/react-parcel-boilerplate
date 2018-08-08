import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from 'shared/services/AuthService'

const authService = new AuthService()

const PublicRoute = ({ component: Component, rest }) => (
  <Route {...rest}
    render={props =>
      authService.isAuthenticated() ? <Redirect to='/' /> : <Component {...props} />
    } />
)

export default PublicRoute
