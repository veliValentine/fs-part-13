const models = require('../models/index.js')
const { Op } = require('sequelize')

const { Blog, User } = models

const getAll = async (searchOptions) => {
  const where = {}
  const { title, author } = searchOptions
  if (title || author) {
    const titleSearch = {
      [Op.iLike]: `%${title}%`,
    }
    const authorSearch = {
      [Op.iLike]: `%${author}%`,
    }
    where[Op.or] = [{ title: titleSearch }, { author: authorSearch }]
  }

  return await Blog.findAll({
    where,
    attributes: {
      exclude: ['userId']
    },
    include: {
      model: User
    },
    order: [
      ['likes', 'DESC']
    ]
  })
}

const getOneById = async (id) => await Blog.findByPk(id)

const create = async (blog, userId) => await Blog.create({ ...blog, userId })

const remove = async (id, userId) => {
  await throwBlogNotExists(id)
  await Blog.destroy({ where: { id, userId }, limit: 1 })
}

const update = async (id, updateBlog) => {
  await throwBlogNotExists(id)
  const oldBlog = await getOneById(id)
  const newBlog = {
    ...oldBlog,
    ...updateBlog
  }
  const [, updatedBlog] = await Blog.update(newBlog, {
    where: { id },
    limit: 1
  })
  return updatedBlog
}

const throwBlogNotExists = async (id) => {
  const blog = await getOneById(id)
  if (!blog) {
    throw new Error(`Blog with id '${id}' not found`)
  }
}

module.exports ={
  getAll,
  create,
  remove,
  update
}