'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleMigration = require('./create-table-role')

const UserMigration = require('./create-table-user')

const TodoMigration = require('./create-table-todo')

const CategoriesMigration = require('./create-table-categorie')

const GenderMigration = require('./create-table-gender')

module.exports = {
  async up(queryInterface, Sequelize) {
    // Role
    await RoleMigration.up(queryInterface, Sequelize)
    // User
    await UserMigration.up(queryInterface, Sequelize)
    // Todo
    await TodoMigration.up(queryInterface, Sequelize)
    // Category
    await CategoriesMigration.up(queryInterface, Sequelize)
    // Gender
    await GenderMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    // Gender
    await GenderMigration.down(queryInterface, Sequelize)
    // Category
    await CategoriesMigration.down(queryInterface, Sequelize)
    // User
    await UserMigration.down(queryInterface, Sequelize)
    // Role
    await RoleMigration.down(queryInterface, Sequelize)
    // Todo
    await TodoMigration.down(queryInterface, Sequelize)
  }
}
