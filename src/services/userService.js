const { User, Blog } = require('../models/index.js')

const create = async (user) => await User.create(user)

const getAll = async () => await User.findAll({
  include: {
    model: Blog
  }
})

const findOne = async (searchOptions, { isRead }) => {
  const readingListSearchOptionValues = {}
  if (isRead) {
    readingListSearchOptionValues.isRead = isRead
  }
  const user = await User.findOne({
    where: searchOptions,
    include: {
      model: Blog,
      as: 'user_blog',
      through: {
        attributes: ['isRead', 'id'],
        where: readingListSearchOptionValues
      },
    }
  })
  return user
}

const update = async (username, updateUser) => {
  const foundUser = await findOne({ username })
  if (!foundUser) {
    throwNotFoundError(`username '${username}'`)
  }
  const newUser = {
    ...foundUser,
    ...updateUser
  }
  const [, updatedUser] = await User.update(newUser, {
    where: { username },
    limit: 1
  })
  return updatedUser
}

const throwNotFoundError = (text) => {
  throw new Error(`User with ${text} not found`)
}

module.exports = {
  create,
  findOne,
  getAll,
  update
}