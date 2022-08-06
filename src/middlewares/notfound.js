const notFound = (req, res, next) => {
  const message = `Endpoint '${req.path}' not found`
  res.status(404).json({ message })
}

module.exports = notFound