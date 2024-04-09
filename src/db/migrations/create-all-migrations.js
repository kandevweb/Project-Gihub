'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleMigration = require('./create-table-role')

const UserMigration = require('./create-table-user')

const ImageMigration = require('./create-table-images')

module.exports = {
  async up(queryInterface, Sequelize) {
    // Role
    await RoleMigration.up(queryInterface, Sequelize)
    // User
    await UserMigration.up(queryInterface, Sequelize)
    // Image
    await ImageMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    // User
    await UserMigration.down(queryInterface, Sequelize)
    // Role
    await RoleMigration.down(queryInterface, Sequelize)
    // Image
    await ImageMigration.down(queryInterface, Sequelize)
  }
}
