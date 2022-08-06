const { DataTypes, Model } = require('sequelize')
const sequelizeServise = require('../services/sequelizeServise.js')

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

module.exports = User
