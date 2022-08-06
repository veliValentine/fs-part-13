const { DataTypes } = require('sequelize')

const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable('token_sessions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
    }
  })
}
const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('token_sessions')
}

const migration = {
  up,
  down
}

module.exports = migration