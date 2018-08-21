export default function profile (
  state = {
    loading: false,
    data: null
  },
  action
) {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return Object.assign({}, state, {loading: true})
    case 'PROFILE_FETCH_SUCCESS':
      return Object.assign({}, state, {loading: false, data: action.profile})
    case 'PROFILE_FETCH_ERROR':
      return Object.assign({}, state, {loading: false})
    default:
      return state
  }
}
