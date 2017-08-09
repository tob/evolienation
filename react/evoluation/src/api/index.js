import client from './client'

class API {
  constructor() {
    this.app = client
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate({ email, password }) {
    return this.app.authenticate(
      Object.assign({}, { strategy: 'local' }, {
      email,
      password,
    }))
    .then((response) => {
      return this.app.passport.verifyJWT(response.accessToken);
    })
    .then((payload) => {
      return this.app.service('users').get(payload.userId);
    })
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
