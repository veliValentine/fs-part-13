import express from 'express'
import notFound from '../middlewares/notfound.js'
const app = express()

app.get('/health', (_req, res) => {
  res.json('ok')
})

app.use(notFound)

export default app
