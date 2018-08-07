import LocalStorageService from 'shared/services/LocalStorageService'

const tokenName = 'token'

class AuthService {
  isAuthenticated () {
    const token = LocalStorageService.get(tokenName)
    return token !== undefined && token !== null
  }

  setToken (token) {
    return LocalStorageService.set(tokenName, token)
  }

  getToken () {
    return LocalStorageService.get(tokenName)
  }

  removeToken () {
    return LocalStorageService.remove(tokenName)
  }
}

export default AuthService
