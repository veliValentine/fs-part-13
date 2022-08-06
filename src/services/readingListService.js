const { ReadingList } = require('../models')

const add = async ({ blogId, userId }) => await ReadingList.create({ blogId, userId })

const update = async (id, userId, newReadingList) => {
  const foundReadingList = await findOne(id)
  const { userId: readingListUserId } = foundReadingList
  if(readingListUserId !== userId) { throw new Error('No permission to update readinglist')}
  if (!foundReadingList) throw new Error(`Reading list with id: '${id}' not found!`)
  const [, updatedReadingList] = await ReadingList.update({ ...foundReadingList, ...newReadingList }, {
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