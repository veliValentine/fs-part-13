const { Router } = require('express')
const userService = require('../services/userService.js')

const userController = Router()

userController.get('/', async (req, res) => {
  const users = await userService.getAll()
  res.json(users)
})

userController.get('/:id', async (req, res) => {
  const { id } = req.params
  const { username, name, user_blog } = await userService.findOne({ id })
  console.log(user_blog)
  const readings = user_blog.map(({dataValues}) => ({ ...dataValues, reading_lists: undefined, readinglists: [dataValues.reading_lists] }))
  res.json({ username, name, readings })
})

userController.post('/', async (req, res) => {
  const addedUser = await userService.create(req.body)
  res.status(201).json(addedUser)
})

userController.put('/:username', async (req, res) => {
  const updatedUser = await userService.update(req.params.username, req.body)
  res.json(updatedUser)
})

module.exports = userController
