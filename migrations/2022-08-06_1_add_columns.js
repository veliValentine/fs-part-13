const { DataTypes, NOW } = require('sequelize')

const up = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('users', 'createdAt', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('users', 'updatedAt', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('blogs', 'createdAt', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('blogs', 'updatedAt', {
    type: DataTypes.DATE,
    default: NOW
  })
  await queryInterface.addColumn('blogs', 'year', {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      max: new Date().getFullYear(),
      mix: 1991
    }
  })
}
const down = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('users', 'createdAt')
  await queryInterface.removeColumn('users', 'updatedAt')
  await queryInterface.removeColumn('blogs', 'createdAt')
  await queryInterface.removeColumn('blogs', 'updatedAt')
}

const migration = {
  up,
  down
}

module.exports = migration