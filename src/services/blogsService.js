import models from '../models/index.js'
import { Op } from 'sequelize'

const { Blog, User } = models

const getAll = async (searchOptions) => {
  const where = {}
  const { title } = searchOptions
  if (title) {
    const titleSearch = {
      [Op.iLike]: `%${title}%`,
    }
    where.title = titleSearch
  }

  return await Blog.findAll({
    where,
    attributes: {
      exclude: ['userId']
    },
    include: {
      model: User
    }
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

export default {
  getAll,
  create,
  remove,
  update
}