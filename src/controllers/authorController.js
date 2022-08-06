const { Router } = require('express')
const authorService = require('../services/authorService.js')

const authorController = Router()

authorController.get('/', async (_req, res) => {
  const authors = await authorService.getAll()
  res.json(authors)
})

module.exports = authorController
