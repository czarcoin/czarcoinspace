const BRIDGE_URL = process.env.NODE_ENV === 'development'
  ? 'localhost:6382'
  : 'api.czarcoin.org'

export default {
  bridge: BRIDGE_URL,
  USERS_DB: 'users.db',
  filePath: ''
}
