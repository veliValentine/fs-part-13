import 'dotenv/config'

const {
  PORT = 3000,
  DB_URL = null,
  SECRET = 'secret'
} = process.env

export default {
  PORT,
  DB_URL,
  SECRET
}