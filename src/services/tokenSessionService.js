const { TokenSession } = require('../models');

const add = async (userId) => await TokenSession.create({ userId })

const findOne = async (searchOptions) => await TokenSession.findOne({ where: searchOptions })

const remove = async (userId) => await TokenSession.destroy({ where: { userId } })

module.exports = {
  add,
  findOne,
  remove
}
