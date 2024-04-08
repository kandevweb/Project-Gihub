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
        type: Sequelize.STRING
      },
      avatar_url: {
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
      biograply: {
        allowNull: false,
        type: Sequelize.TEXT,
        
      },
    
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Casts')
  }
}
