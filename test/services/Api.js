import test from 'blue-tape'
import Api from 'services/Api'
import fetchMock from 'fetch-mock'

test('Login with valid credentials should return a token', (assert) => {
  Api.login('root', '').then((token) => {
    assert.equal(token, '::token::', 'Returned token should match')
    assert.end()
  })
})

test('Login with invalid credentials should reject', (assert) => {
  return assert.shouldFail(Api.login('wrongusername', 'wrongpassword'), /Invalid credentials/)
})

test('Get profile without a token should reject', (assert) => {
  return assert.shouldFail(Api.getProfile(), /No token provided/)
})

test('Get profile with token should return a profile', (assert) => {
  Api.getProfile('::token').then((profile) => {
    const expectedProfile = {name: 'Christian', email: 'bopechri@protonmail.com'}
    assert.deepEqual(profile, expectedProfile, 'Returned profile should match')
    assert.end()
  })
})

test('Get posts should return a list of posts', (assert) => {
  const expectedPostsList = [{id: 1, title: 'POST TITLE'}]
  fetchMock.get((url, opts) => {
    return url === 'https://jsonplaceholder.typicode.com/users'
  }, expectedPostsList)
  Api.getPosts().then((result) => {
    assert.deepEqual(result, expectedPostsList)
    assert.end()
  })
  fetchMock.restore()
})

test('Get posts should reject if endpoint is responding an error', (assert) => {
  fetchMock.get((url, opts) => {
    return url === 'https://jsonplaceholder.typicode.com/users'
  }, 400)
  const promise = Api.getPosts()
  fetchMock.restore()
  return assert.shouldFail(promise, /400/)
})
