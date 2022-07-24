import models from '../models/index.js'

const { Blog } = models

const getAll = async () => await Blog.findAll()

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