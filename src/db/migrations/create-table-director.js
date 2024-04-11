'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //hihi
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Directors', {
      director_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      fullname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender_id: {
        allowNull: true,
        type: Sequelize.STRING
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
        allowNull: true,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Directors')
  }
}