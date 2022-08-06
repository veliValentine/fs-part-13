const { DataTypes } = require('sequelize')

const up = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('users', 'isDisabled', {
    type: DataTypes.BOOLEAN,
    default: false
  })
  await queryInterface.addColumn('users', 'tokenSessionId', {
    type: DataTypes.INTEGER,
    references: { model: 'token_sessions', key: 'id' },
  })
}
const down = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('users', 'isDisabled')
}

const migration = {
  up,
  down
}

module.exports = migration