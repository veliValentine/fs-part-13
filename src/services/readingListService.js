const { ReadingList } = require('../models')

const add = async ({ blogId, userId }) => await ReadingList.create({ blogId, userId })

module.exports = {
  add
}