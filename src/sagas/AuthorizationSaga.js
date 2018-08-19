import { call, put, take, fork, takeLatest} from 'redux-saga/effects'
import Api from 'services/Api'
import TokenStorage from 'services/TokenStorage'

function* authorize(user, password) {
    try {
        const token = yield call(Api.login, user, password)
        yield put({type: 'LOGIN_SUCCESS', token})
        yield call(TokenStorage.put, token)
    } catch(error) {
        yield put({type: 'LOGIN_ERROR', error})
    }
}

function* checkIfAuhtorized(){
    const isValid = yield call(TokenStorage.isValid)
    if(isValid){
        yield put({type:'LOGIN_SUCCESS'})
    }else{
        yield put({type: 'LOGIN_ERROR'})
    }
}

function* logout(){
    yield call(TokenStorage.remove)
}

function* authFlow() {
    yield takeLatest('CHECK_IF_AUTHORIZED',checkIfAuhtorized)
    yield takeLatest('LOGOUT',logout)

    while (true) {
        const {username, password} = yield take('LOGIN_REQUEST')
        yield fork(authorize, username, password)
        yield take(['LOGOUT', 'LOGIN_ERROR'])
        yield call(logout)
    }
}
export default authFlow;
