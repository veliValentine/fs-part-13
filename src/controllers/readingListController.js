const { Router } = require('express')
const readinglistService = require('../services/readingListService')

const readingListController = Router()

readingListController.post('/', async (req, res) => {
  const addedReadingList = await readinglistService.add(req.body)
  res.json(addedReadingList)
})

readingListController.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedReadinList = await readinglistService.update(id, req.body)
  res.json(updatedReadinList)
})

module.exports = readingListController