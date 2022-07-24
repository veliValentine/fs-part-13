const errorMiddleware = (error, req, res, next) => {
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

export default errorMiddleware
