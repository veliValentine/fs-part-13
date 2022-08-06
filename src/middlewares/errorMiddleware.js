const errorMiddleware = (error, req, res, next) => {
  console.error('error:', error?.message ?? error)
  console.error('error json:', JSON.stringify(error))
  if (error instanceof Error) {
    const errorResponse = {
      error: {
        message: error.message
      }
    }
    return res.status(500).json(errorResponse)
  }
  next()
}

module.exports = errorMiddleware
