const { Router } = require( 'express')
const userService = require( '../services/userService.js')

const userController = Router()

userController.get('/', async (req, res) => {
  const users = await userService.getAll()
  res.json(users)
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
