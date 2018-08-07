import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from 'router/PrivateRoute'
import PublicRoute from 'router/PublicRoute'
import Hello from 'sections/hello/Hello'
import Bye from 'sections/dashboard/bye/Bye'

const Router = (match) => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path='/hello' component={Hello} />
        <PrivateRoute path='/' component={Bye} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
