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
        type: Sequelize.STRING,
        references: {
          model: 'Users', // Tên của bảng mà khóa ngoại liên kết đến
          key: 'user_id' // Tên của cột trong bảng mà khóa ngoại liên kết đến
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Todos')
  }
}
