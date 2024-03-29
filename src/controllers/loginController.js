const { Router } = require('express')
const userService = require('../services/userService.js')
const jwt = require('jsonwebtoken')
const config = require('../utils/config.js')
const tokenSessionService = require('../services/tokenSessionService')

const loginController = Router()

const PASSWORD = 'secret'

loginController.post('/', async (req, res) => {
  const { body } = req
  const user = await userService.findOne({ username: body.username })

  const userAndPassword = user && PASSWORD === body.password
  if (!userAndPassword) {
    return res.status(401).json({ error: 'invalid username or password' })
  }

  await tokenSessionService.add(user.id)

  const { username, name } = user
  const token = getToken(user)
  res.json({
    token,
    username,
    name
  })
})

const getToken = (user) => {
  const { username, id } = user
  const userToken = {
    username,
    id
  }
  return jwt.sign(userToken, config.SECRET)
}

module.exports = loginController
