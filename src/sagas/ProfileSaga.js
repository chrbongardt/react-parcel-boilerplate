import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'services/Api'

export function * fetchProfile () {
  try {
    const profile = yield call(Api.getProfile, '::token::')
    yield put({type: 'PROFILE_FETCH_SUCCESS', profile})
  } catch (error) {
    yield put({type: 'PROFILE_FETCH_ERROR', error})
  }
}

export default function * watch () {
  yield takeLatest('FETCH_PROFILE', fetchProfile)
}
