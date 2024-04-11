'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      profile_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      biography: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      profile_picture: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover_photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      date_of_birth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      education: {
        allowNull: true,
        type: Sequelize.STRING
      },
      job: {
        allowNull: true,
        type: Sequelize.STRING
      },
      alias: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Genders',
          key: 'gender_id'
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'user_id'
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
    await queryInterface.dropTable('Profiles')
  }
}
