import { Router } from 'express';
import authorService from '../services/authorService.js';

const authorController = Router()

authorController.get('/', async (_req, res) => {
  const authors = await authorService.getAll()
  res.json(authors)
})

export default authorController
