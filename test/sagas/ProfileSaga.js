import test from 'blue-tape'
import { call, put } from 'redux-saga/effects'
import Api from 'services/Api'
import { fetchProfile } from 'sagas/ProfileSaga'

test('On profile response fetchProfile should put profile', (assert) => {
  const iterator = fetchProfile()
  assert.deepEqual(
    iterator.next().value,
    call(Api.getProfile, '::token::')
  )
  const profile = {name: 'Christian'}
  assert.deepEqual(
    iterator.next(profile).value,
    put({ type: 'PROFILE_FETCH_SUCCESS', profile })
  )
  assert.end()
})

test('On error during profile fetch fetchProfile should put error', (assert) => {
  const iterator = fetchProfile()
  assert.deepEqual(
    iterator.next().value,
    call(Api.getProfile, '::token::')
  )
  const error = new Error('::some_error::')
  assert.deepEqual(
    iterator.throw(new Error()).value,
    put({ type: 'PROFILE_FETCH_ERROR', error })
  )
  assert.end()
})
