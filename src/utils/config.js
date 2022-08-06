require('dotenv/config')

const {
  PORT = 3000,
  DB_URL = null,
  SECRET = 'secret'
} = process.env

module.exports = {
  PORT,
  DB_URL,
  SECRET
}