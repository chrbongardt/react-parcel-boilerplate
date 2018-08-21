const TokenStorage = {
  get () {
    return window.localStorage.getItem('TOKEN')
  },
  put (value) {
    return window.localStorage.setItem('TOKEN', value)
  },
  remove () {
    return window.localStorage.removeItem('TOKEN')
  },
  isValid () {
    return window.localStorage.getItem('TOKEN') != null
  }
}

export default TokenStorage
