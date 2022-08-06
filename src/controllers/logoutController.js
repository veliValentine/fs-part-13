const { Router } = require('express');
const tokenSessionService = require('../services/tokenSessionService')

const logoutController = Router()

logoutController.delete('/', async (req, res) => {
  const { id: userId } = req.decodedToken
  tokenSessionService.remove(userId)
  res.json('ok')
})

module.exports = logoutController