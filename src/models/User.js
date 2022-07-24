import types from 'sequelize'
import sequelizeServise from '../services/sequelizeServise.js'
const { DataTypes, Model } = types

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  sequelize: sequelizeServise.getSequelize(),
  modelName: 'users'
})

User.sync()

export default User
