import Blog from './Blog.js';
import User from './User.js'

Blog.hasOne(User)
User.hasMany(Blog)

Blog.sync({ alter: true })
User.sync({ alter: true })

export default {
  Blog,
  User
}