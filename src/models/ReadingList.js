const { DataTypes, Model } = require('sequelize')
const sequelizeServise = require('../services/sequelizeServise.js')

class ReadingList extends Model { }

ReadingList.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'blogs', key: 'id' },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize: sequelizeServise.getSequelize(),
  modelName: 'reading_lists',
  timestamps: false
})

module.exports = ReadingList
