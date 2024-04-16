'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleSeeder = require('./role-seeder')
const UserSeeder = require('./user-seeder')
const ImageSeeder = require('./image-seeder')
const TodoSeeder = require('./todo-seeder')
const CategorySeeder = require('./category-seeder')
const DirectorSeeder = require('./director-seeder')
const GenderSeeder = require('./gender-seeder')
const PostSeeder = require('./post-seeder')
const ProductSeeder = require('./product-seeder')

module.exports = {
  async up(queryInterface, Sequelize) {
    await RoleSeeder.up(queryInterface, Sequelize)
    await UserSeeder.up(queryInterface, Sequelize)
    await ImageSeeder.up(queryInterface, Sequelize)
    await TodoSeeder.up(queryInterface, Sequelize)
    await CategorySeeder.up(queryInterface, Sequelize)
    await DirectorSeeder.up(queryInterface, Sequelize)
    await GenderSeeder.up(queryInterface, Sequelize)
    await PostSeeder.up(queryInterface, Sequelize)
    await ProductSeeder.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {}
}
