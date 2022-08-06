const { Router } = require('express')
const readinglistService = require('../services/readingListService')

const readingListController = Router()

readingListController.post('/', async (req, res) => {
  const addedReadingList = await readinglistService.add(req.body)
  res.json(addedReadingList)
})

module.exports = readingListController