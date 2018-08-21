export default function auth (
  state = {
    loading: false,
    authenticated: false
  },
  action
) {
  switch (action.type) {
    case 'CHECK_IF_AUTHORIZED':
      return Object.assign({}, state, {loading: true})
    case 'REQUEST_LOGIN':
      return Object.assign({}, state, {loading: true})
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {authenticated: true, loading: false})
    case 'LOGIN_ERROR':
      return Object.assign({}, state, {authenticated: false, loading: false})
    case 'LOGOUT':
      return Object.assign({}, state, {loading: false, authenticated: false})
    default:
      return state
  }
}
