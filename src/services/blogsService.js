import Blog from '../models/Blog.js'

const getAll = async () => await Blog.findAll()

const getOneById = async (id) => await Blog.findByPk(id)

const create = async (blog) => await Blog.create(blog)

const remove = async (id) => {
  await throwBlogNotExists(id)
  await Blog.destroy({ where: { id }, limit: 1 })
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
  return updateBlog
}

const throwBlogNotExists = async (id) => {
  const blog = await getOneById(id)
  if (blog === undefined) {
    throw new Error(`Blog with id '${id}' not found`)
  }
}

export default {
  getAll,
  create,
  remove,
  update
}