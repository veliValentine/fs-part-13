import { Router } from 'express';
import blogsService from '../services/blogsService.js';

const blogsController = Router()

blogsController.get('/', (_req, res) => {
  asyncErrorWrapper(async () => {
    const blogs = await blogsService.getAll()
    res.json(blogs)
  }, res)
})

blogsController.post('/', (req, res) => {
  asyncErrorWrapper(async () => {
    const blogs = await blogsService.create(req.body)
    res.json(blogs)
  }, res)
})

blogsController.delete('/:id', (req, res) => {
  asyncErrorWrapper(async () => {
    console.log('before')
    await blogsService.remove(req.params.id)
    console.log('after')
    res.status(204).send()
  }, res)
})

const asyncErrorWrapper = async (callback, res) => {
  try {
    return await callback()
  } catch (error) {
    console.error('Error:', error.message)
    res.status(500).json({ error: error.message })
  }
}

export default blogsController