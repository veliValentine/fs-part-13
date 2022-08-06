const Blog = require('./Blog.js')
const ReadingList = require('./ReadingList.js')
const User = require('./User.js')

User.hasMany(Blog)

Blog.belongsTo(User)

Blog.belongsToMany(User, { through: ReadingList, as: 'blog_user' })
User.belongsToMany(Blog, { through: ReadingList, as: 'user_blog' })

module.exports = {
  Blog,
  User,
  ReadingList
}