import express from 'express'
import 'express-async-errors'
import blogsController from './controllers/blogsController.js'
import errorMiddleware from './middlewares/errorMiddleware.js'
import notFound from './middlewares/notfound.js'

const app = express()
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json('ok')
})

app.use('/api/blogs', blogsController)

app.use(errorMiddleware)

app.use(notFound)

export default app
