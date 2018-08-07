const LocalStorageService = {
  get (name) {
    return window.localStorage.getItem(name)
  },
  set (name, value) {
    return window.localStorage.setItem(name, value)
  },
  remove (name) {
    return window.localStorage.removeItem(name)
  }
}

export default LocalStorageService
