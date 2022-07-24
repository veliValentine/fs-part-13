import User from '../models/User.js'

const create = async (user) => await User.create(user)

const getAll = async () => await User.findAll()

const findFirst = async (searchOptions) => {
  const users = await User.findAll({
    where: searchOptions
  })
  if (users.length > 0) {
    return users[0]
  }
  return null
}

const update = async (username, updateUser) => {
  const foundUser = await findFirst({ username })
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

export default {
  create,
  findFirst,
  getAll,
  update
}