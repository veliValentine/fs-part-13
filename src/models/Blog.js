import types from 'sequelize'
import sequelizeServise from '../services/sequelizeServise.js'
const { DataTypes, Model } = types

class Blog extends Model { }

Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize: sequelizeServise.getSequelize(),
  modelName: 'blogs',
  timestamps: false
})

export default Blog
