import auth from './auth'

export default (config) => ({
  auth: auth(config),
})
