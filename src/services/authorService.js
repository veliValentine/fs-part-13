const sequelize = require('sequelize')
const { Blog } = require('../models/index.js')

const getAll = async () => {
  return Blog.findAll({
    group: 'author',
    attributes: [
      'author',
      [sequelize.fn('COUNT', sequelize.col('id')), 'articles'],
      [sequelize.fn('SUM', sequelize.col('likes')), 'likes']
    ]
  })
}

module.exports = {
  getAll
}
