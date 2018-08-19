import { combineReducers } from 'redux'
import profileReducer from 'reducers/ProfileReducer'
import authReducer from 'reducers/AuthReducer'

export default combineReducers({
    profile: profileReducer, auth: authReducer
})
