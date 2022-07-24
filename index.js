import { Sequelize, QueryTypes } from 'sequelize'
import config from './src/utils/config.js'

const sequelize = new Sequelize(config.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
})

const main = async () => {
  try {
    const blogs = await sequelize.query('SELECT * FROM blogs', { type: QueryTypes.SELECT })
    const printBlog = ({ author, title, likes }) => {
      console.log(`${author}: '${title}', ${likes} likes`)
    }
    blogs.forEach(printBlog)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  } finally {
    sequelize.close()
    console.log('connection closed')
  }
}

main()