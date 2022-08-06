const Blog = require('./Blog.js')
const ReadingList = require('./ReadingList.js')
const TokenSession = require('./TokenSession.js')
const User = require('./User.js')

User.hasMany(Blog)

Blog.belongsTo(User)

Blog.belongsToMany(User, { through: ReadingList, as: 'blog_user' })
User.belongsToMany(Blog, { through: ReadingList, as: 'user_blog' })

TokenSession.hasMany(User)

module.exports = {
  Blog,
  User,
  ReadingList,
  TokenSession
}