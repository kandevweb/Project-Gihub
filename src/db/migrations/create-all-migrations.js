'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleMigration = require('./create-table-role')

const UserMigration = require('./create-table-user')

const ImageMigration = require('./create-table-image')

const TodoMigration = require('./create-table-todo')

const CategoriesMigration = require('./create-table-category')

const GenderMigration = require('./create-table-gender')

const PostMigration = require('./create-table-post')

const CastMigration = require('./create-table-cast')


module.exports = {
  async up(queryInterface, Sequelize) {
    // Role
    await RoleMigration.up(queryInterface, Sequelize)
    // User
    await UserMigration.up(queryInterface, Sequelize)
    // Image
    await ImageMigration.up(queryInterface, Sequelize)
    // Todo
    await TodoMigration.up(queryInterface, Sequelize)
    // Category
    await CategoriesMigration.up(queryInterface, Sequelize)
    // Gender
    await GenderMigration.up(queryInterface, Sequelize)
    // Post
    await PostMigration.up(queryInterface, Sequelize)
    // Cast
    await CastMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    // Post
    await PostMigration.down(queryInterface, Sequelize)
    // Gender
    await GenderMigration.down(queryInterface, Sequelize)
    // Category
    await CategoriesMigration.down(queryInterface, Sequelize)
    // User
    await UserMigration.down(queryInterface, Sequelize)
    // Role
    await RoleMigration.down(queryInterface, Sequelize)

    // Image
    await ImageMigration.down(queryInterface, Sequelize)

    // Todo
    await TodoMigration.down(queryInterface, Sequelize)
     // Cast
     await CastMigration.down(queryInterface, Sequelize)
  }
}
