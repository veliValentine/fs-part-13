const Blog = require('./Blog.js')
const User = require('./User.js')

User.hasMany(Blog)

Blog.belongsTo(User)

module.exports = {
  Blog,
  User
}