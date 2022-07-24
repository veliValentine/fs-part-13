import { Sequelize} from 'sequelize'
import config from '../utils/config.js'

const sequelize = new Sequelize(config.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
})

const getSequelize = () => sequelize

export default {
  getSequelize
}