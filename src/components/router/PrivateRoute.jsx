import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, rest, auth }) => (
    <Route {...rest} render={ (props) => {
            if(auth.loading) return 'Loading...' 
            return (auth.authenticated ? <Component {...props} /> : <Redirect to='/login' />)
        }
    } />
)

export default connect(
    (state) => {
        return {
            auth: state.auth
        }
    }
)(PrivateRoute)
