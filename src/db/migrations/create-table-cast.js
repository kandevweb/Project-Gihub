'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Casts', {
      cast_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      full_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: 'Genders',
          key: 'gender_id'
        }
      },
      avatar_url: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: 'Images', // Tên của bảng mà khóa ngoại liên kết đến
          key: 'image_id' // Tên của cột trong bảng mà khóa ngoại liên kết đến
        }
      },
      nationality: {
        allowNull: true,
        type: Sequelize.STRING
      },
      birth_day: {
        allowNull: true,
        type: Sequelize.DATE
      },
      biography: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Casts')
  }
}
