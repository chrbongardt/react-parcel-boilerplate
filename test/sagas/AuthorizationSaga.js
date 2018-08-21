import test from 'blue-tape'
import { call, put } from 'redux-saga/effects'
import Api from 'services/Api'
import { authorize, checkIfAuhtorized, logout } from 'sagas/AuthorizationSaga'
import TokenStorage from 'services/TokenStorage'

test('On successfull login call authorize should put login success', (assert) => {
  const iterator = authorize('username', 'password')
  assert.deepEqual(
    iterator.next().value,
    call(Api.login, 'username', 'password')
  )
  const token = '::token::'
  assert.deepEqual(
    iterator.next(token).value,
    put({ type: 'LOGIN_SUCCESS', token })
  )
  assert.deepEqual(
    iterator.next().value,
    call(TokenStorage.put, token)
  )

  assert.end()
})

test('On error in login call should put login error', (assert) => {
  const iterator = authorize('username', 'password')
  assert.deepEqual(
    iterator.next().value,
    call(Api.login, 'username', 'password')
  )
  const error = new Error('::some_error')
  assert.deepEqual(
    iterator.throw(error).value,
    put({ type: 'LOGIN_ERROR', error })
  )
  assert.end()
})

test('On valid token checkIfAuthorized should put login success', (assert) => {
  const iterator = checkIfAuhtorized()
  assert.deepEqual(
    iterator.next().value,
    call(TokenStorage.isValid)
  )
  assert.deepEqual(
    iterator.next(true).value,
    put({ type: 'LOGIN_SUCCESS' })
  )
  assert.end()
})

test('On invalid token checkIfAuthorized should put login error', (assert) => {
  const iterator = checkIfAuhtorized()
  assert.deepEqual(
    iterator.next().value,
    call(TokenStorage.isValid)
  )
  assert.deepEqual(
    iterator.next(false).value,
    put({ type: 'LOGIN_ERROR' })
  )
  assert.end()
})

test('On logout checkIfAuthorized should remvoe token', (assert) => {
  const iterator = logout()
  assert.deepEqual(
    iterator.next().value,
    call(TokenStorage.remove)
  )
  assert.end()
})
