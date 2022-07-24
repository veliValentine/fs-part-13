import Blog from '../models/Blog.js'

const getAll = async () => await Blog.findAll()

const getOneById = async (id) => await Blog.findByPk(id)

const create = async (blog) => await Blog.create(blog)

const remove = async (id) => {
  if (await getOneById(id)) {
    await Blog.destroy({ where: { id }, limit: 1 })
    return
  }
  throw new Error(`Blog with id '${id}' not found`)
}

export default {
  getAll,
  create,
  remove
}