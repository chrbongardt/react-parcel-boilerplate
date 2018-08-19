import { call, put, takeLatest} from 'redux-saga/effects'
import Api from 'services/Api'
import TokenStorage from 'services/TokenStorage'

function* fetchProfile() {
  try {
    const profile = yield call(Api.getProfile,TokenStorage.get())
    yield put({type: 'PROFILE_FETCH_SUCCESS', profile})
  } catch(error) {
    yield put({type: 'PROFILE_FETCH_ERROR', error})
  }
}


function* watch() {
  yield takeLatest('FETCH_PROFILE',fetchProfile)
}
export default watch;
