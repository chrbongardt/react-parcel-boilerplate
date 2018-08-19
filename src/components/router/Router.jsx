import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from 'components/router/PrivateRoute'
import PublicRoute from 'components/router/PublicRoute'

import Profile from 'components/profile/Profile'
import Login from 'components/login/Login'

class Router extends Component{
    constructor({dispatch}){
        super()
        this.dispatch = dispatch
    }

    componentWillMount(){
        this.dispatch({type: 'CHECK_IF_AUTHORIZED'})
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path='/' component={Login} />
                    <PrivateRoute path='/profile' component={Profile} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default connect()(Router)
