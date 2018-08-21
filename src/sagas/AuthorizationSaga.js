import { call, put, take, fork, takeLatest } from 'redux-saga/effects'
import Api from 'services/Api'
import TokenStorage from 'services/TokenStorage'

export function * authorize (user, password) {
  try {
    const token = yield call(Api.login, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    yield call(TokenStorage.put, token)
  } catch (error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

export function * checkIfAuhtorized () {
  const isValid = yield call(TokenStorage.isValid)
  if (isValid) {
    yield put({type: 'LOGIN_SUCCESS'})
  } else {
    yield put({type: 'LOGIN_ERROR'})
  }
}

export function * logout () {
  yield call(TokenStorage.remove)
}

export default function * watch () {
  yield takeLatest('CHECK_IF_AUTHORIZED', checkIfAuhtorized)
  yield takeLatest('LOGOUT', logout)

  while (true) {
    const {username, password} = yield take('REQUEST_LOGIN')
    yield fork(authorize, username, password)
    yield take(['LOGOUT', 'LOGIN_ERROR'])
    yield call(logout)
  }
}
