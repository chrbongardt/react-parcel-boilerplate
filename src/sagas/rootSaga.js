import { all, fork } from 'redux-saga/effects'
import AuthorizationSaga from 'sagas/AuthorizationSaga'
import ProfileSaga from 'sagas/ProfileSaga'

export default function* root() {
  yield all([
      fork(AuthorizationSaga),
      fork(ProfileSaga)
  ])
}
