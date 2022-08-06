const express = require('express')
require('express-async-errors')
const authorController = require('./controllers/authorController.js')
const blogsController = require('./controllers/blogsController.js')
const loginController = require('./controllers/loginController.js')
const logoutController = require('./controllers/logoutController.js')
const readingListController = require('./controllers/readingListController.js')
const userController = require('./controllers/userController.js')
const errorMiddleware = require('./middlewares/errorMiddleware.js')
const notFound = require('./middlewares/notfound.js')
const tokenExtractor = require('./middlewares/tokenExtractor.js')

const app = express()
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json('ok')
})

app.use('/api/login', loginController)

app.use(tokenExtractor)

app.use('/api/logout', logoutController)

app.use('/api/blogs', blogsController)
app.use('/api/users', userController)
app.use('/api/authors', authorController)
app.use('/api/readinglists', readingListController)

app.use(errorMiddleware)

app.use(notFound)

module.exports = app
