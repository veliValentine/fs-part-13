const jwt = require('jsonwebtoken')
const config = require('../utils/config.js')
const tokenSessionService = require('../services/tokenSessionService')

const tokenExtractor = async (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      const decodedToken = jwt.verify(authorization.substring(7), config.SECRET) ?? {}
      const foundSession = await tokenSessionService.findOne({ userId: decodedToken.id })
      if (!foundSession) {
        throw new Error('User session not valid')
      }
      req.decodedToken = decodedToken
    } catch (error) {
      console.error('error', error.message ?? error, JSON.stringify(error))
      return res.status(401).json({ error: 'token invalid' })
    }
  } else {
    return res.status(401).json({ error: 'token missing' })
  }
  next()
}

module.exports = tokenExtractor
