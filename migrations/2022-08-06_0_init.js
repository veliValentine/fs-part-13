const { DataTypes, NOW } = require('sequelize')

const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable('blogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  })
  await queryInterface.createTable('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  })
  await queryInterface.addColumn('users', 'created_at', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('users', 'updated_at', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('blogs', 'created_at', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('blogs', 'updated_at', {
    type: DataTypes.DATE,
    default: NOW
  })
}
const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('blogs')
  await queryInterface.dropTable('users')
}

const migration = {
  up,
  down
}

module.exports = migration