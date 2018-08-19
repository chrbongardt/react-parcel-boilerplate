import React from 'react'
import style from './Login.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor({dispatch,auth}){
        super()
        this.dispatch = dispatch
        this.login = this.login.bind(this)
    }

    login(e){
        e.preventDefault()
        this.dispatch({type: 'LOGIN_REQUEST',username: this.username.value, password: this.password.value})
    }

    render () {
        if (this.props.auth.authenticated){
            return (
                <Redirect to="/profile"/>
            )
        }
        return (
            <div className={style.wrapper}>
                <h1> Login </h1>
                <form>
                    <label htmlFor="username"> Username </label>
                    <input id="username" autoComplete="login-username" ref={node => { this.username = node }} /> 
                    <label htmlFor="password"> Password </label>
                    <input id="password" autoComplete="login-password" type="password" ref={node => { this.password = node }} /> 
                    <button onClick={this.login} >Do login </button>
                </form>
                <span className={style.help}> Username is root. Leave password blank. </span>
            </div>
        )
    }
}

export default connect((state)=>({auth:state.auth}))(Login)
