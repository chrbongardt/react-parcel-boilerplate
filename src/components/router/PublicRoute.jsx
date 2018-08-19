import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PublicRoute = ({ component: Component, rest }) => (
  <Route {...rest}
    render={props =>
      <Component {...props} />
    } />
)

export default PublicRoute