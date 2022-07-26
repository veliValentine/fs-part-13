import express from 'express'
import 'express-async-errors'
import authorController from './controllers/authorController.js'
import blogsController from './controllers/blogsController.js'
import loginController from './controllers/loginController.js'
import userController from './controllers/userController.js'
import errorMiddleware from './middlewares/errorMiddleware.js'
import notFound from './middlewares/notfound.js'
import tokenExtractor from './middlewares/tokenExtractor.js'

const app = express()
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json('ok')
})


app.use('/api/login', loginController)

app.use(tokenExtractor)

app.use('/api/blogs', blogsController)
app.use('/api/users', userController)
app.use('/api/authors', authorController)

app.use(errorMiddleware)

app.use(notFound)

export default app
