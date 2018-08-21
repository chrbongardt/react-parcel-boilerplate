import test from 'blue-tape'
import profileReducer from 'reducers/ProfileReducer'
import deepFreeze from 'deep-freeze'

test('On fetch profile profileReducer should set loading to true', (assert) => {
  const givenState = {loading: false}
  const expectedState = {loading: true}
  deepFreeze(givenState)
  const actualState = profileReducer(givenState, {type: 'FETCH_PROFILE'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On profile fetch success profileReducer should set loading to true and set data', (assert) => {
  const givenState = {loading: true}
  const expectedState = {loading: false, data: { name: 'test' }}
  deepFreeze(givenState)
  const actualState = profileReducer(givenState, {type: 'PROFILE_FETCH_SUCCESS', profile: {name: 'test'}})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On profile fetch error should set loading to false', (assert) => {
  const givenState = {loading: true}
  const expectedState = {loading: false}
  deepFreeze(givenState)
  const actualState = profileReducer(givenState, {type: 'PROFILE_FETCH_ERROR'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})

test('On unhandled action type, profileReducer should return state as is', (assert) => {
  const givenState = {loading: true, data: null}
  const expectedState = {loading: true, data: null}
  deepFreeze(givenState)
  const actualState = profileReducer(givenState, {type: 'UNHANDLED'})
  assert.deepEqual(actualState, expectedState)
  assert.end()
})
