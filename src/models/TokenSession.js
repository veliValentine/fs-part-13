const { DataTypes, Model } = require('sequelize')
const sequelizeServise = require('../services/sequelizeServise.js')

class TokenSession extends Model { }

TokenSession.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
  }
}, {
  sequelize: sequelizeServise.getSequelize(),
  modelName: 'token_sessions',
  timestamps: false
})

module.exports = TokenSession
