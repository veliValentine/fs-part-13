const { User, Blog, ReadingList } = require('../models/index.js')

const create = async (user) => await User.create(user)

const getAll = async () => await User.findAll({
  include: {
    model: Blog,
    through: {
      attributes: []
    }
  }
})

const findOne = async (searchOptions) => {
  const user = await User.findOne({
    where: searchOptions,
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'id']
    },
    include: {
      model: Blog,
      as: 'user_blog',
      through: {
        attributes: []
      }
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