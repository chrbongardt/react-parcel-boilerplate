import React, { Component } from 'react'
import style from './Profile.scss'
import { connect } from 'react-redux'

import ProfileDetails from './ProfileDetails'

class Profile extends Component {
  constructor ({dispatch}) {
    super()
    this.dispatch = dispatch
    this.logout = this.logout.bind(this)
  }

  componentWillMount () {
    this.dispatch({type: 'FETCH_PROFILE'})
  }

  logout () {
    this.dispatch({type: 'LOGOUT'})
  }

  render () {
    return (
      <div className={style.wrapper}>
        <h1> Profile </h1>
        <ProfileDetails profile={this.props.profile} />
        <button onClick={this.logout}> Logout </button>
      </div>
    )
  }
}

export default connect(state => ({profile: state.profile}))(Profile)
