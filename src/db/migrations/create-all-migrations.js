'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleMigration = require('./create-table-role')

const UserMigration = require('./create-table-user')

const CategoriesMigration = require('./create-table-categorie')

const DirectorsMigration = require('./create-table-directors')

module.exports = {
  async up(queryInterface, Sequelize) {
    // Role
    await RoleMigration.up(queryInterface, Sequelize)
    // User
    await UserMigration.up(queryInterface, Sequelize)
    // Categories
    await CategoriesMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    // Categories
    await CategoriesMigration.down(queryInterface, Sequelize)
    // User
    await UserMigration.down(queryInterface, Sequelize)
    // Role
    await RoleMigration.down(queryInterface, Sequelize)
  }
}
