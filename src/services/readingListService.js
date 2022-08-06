const { ReadingList } = require('../models')

const add = async ({ blogId, userId }) => await ReadingList.create({ blogId, userId })

const update = async (id, newReadingList) => {
  const found = await findOne(id)
  if (!found) throw new Error(`Reading list with id: '${id}' not found!`)
  const [, updatedReadingList] = await ReadingList.update({ ...found, ...newReadingList }, {
    where: { id },
    limit: 1
  })
  return updatedReadingList
}

const findOne = async (id) => await ReadingList.findByPk(id)

module.exports = {
  add,
  update
}