import 'dotenv/config'

const {
  PORT = 3000,
  DB_URL = null
} = process.env

export default {
  PORT,
  DB_URL
}