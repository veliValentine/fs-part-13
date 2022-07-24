import 'dotenv/config'

const {
  DB_URL = null
} = process.env

export default {
  DB_URL
}