import sequelize from 'sequelize'
import models from '../models/index.js'

const { Blog } = models

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

export default {
  getAll
}
