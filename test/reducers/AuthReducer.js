import test from 'blue-tape'
import authReducer from 'reducers/AuthReducer'
import deepFreeze from 'deep-freeze'

test('On request login authReducer should set loading to true', (assert) => {
  const givenState = {loading: false}
  const expectedState = {loading: true}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'REQUEST_LOGIN'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On check if authorized authReducer should set loading to true', (assert) => {
  const givenState = {loading: false}
  const expectedState = {loading: true}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'CHECK_IF_AUTHORIZED'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On login success authReducer should set loading to false and authenticated to true', (assert) => {
  const givenState = {loading: true, authenticated: false}
  const expectedState = {loading: false, authenticated: true}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'LOGIN_SUCCESS'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On login error authReducer should set loading to false and authenticated to false', (assert) => {
  const givenState = {loading: true}
  const expectedState = {loading: false, authenticated: false}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'LOGIN_ERROR'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On logout authReducer should set loading to false and authenticated to false', (assert) => {
  const givenState = {loading: true, authenticated: true}
  const expectedState = {loading: false, authenticated: false}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'LOGOUT'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On unhandled action type, authReducer should return state as is', (assert) => {
  const givenState = {loading: true, authenticated: true}
  const expectedState = {loading: true, authenticated: true}
  deepFreeze(givenState)
  const actualState = authReducer(givenState, {type: 'UNHANDLED'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})
