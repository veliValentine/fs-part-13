import { Router } from 'express';
import blogsService from '../services/blogsService.js';

const blogsController = Router()

blogsController.get('/', async (_req, res) => {
  const blogs = await blogsService.getAll()
  res.json(blogs)
})

blogsController.post('/', async (req, res) => {
  const blogs = await blogsService.create(req.body)
  res.json(blogs)
})

blogsController.delete('/:id', async (req, res) => {
  console.log('before')
  await blogsService.remove(req.params.id)
  console.log('after')
  res.status(204).send()
})

blogsController.put('/:id', async (req, res) => {
  const newBlog = await blogsService.update(req.params.id, req.body)
  res.json(newBlog)
})

export default blogsController