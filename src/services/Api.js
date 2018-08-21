import 'isomorphic-fetch'
const Api = {
  login (username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'root') {
        resolve('::token::')
      } else reject(new Error('Invalid credentials'))
    })
  },
  getProfile (token) {
    return new Promise((resolve, reject) => {
      if (token) resolve({name: 'Christian', email: 'bopechri@protonmail.com'})
      else reject(new Error('No token provided'))
    })
  },

  getPosts () {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        if (!response.ok) {
          reject(new Error(response.status))
        }
        response.json().then(resolve, reject)
      })
    })
  }

}

export default Api
