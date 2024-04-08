'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Todos', {
      todo_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      todo_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      completed: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      user_id: {
        allowNull: true,
        type: Sequelize.STRING
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Todos')
  }
}
