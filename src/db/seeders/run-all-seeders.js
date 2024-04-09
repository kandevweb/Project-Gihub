'use strict'
/** @type {import('sequelize-cli').Migration} */

const RoleSeeder = require('./role-seeder')
const UserSeeder = require('./user-seeder')
const CategoriesSeeder = require('./categorie-seeder')
const GenderSeeder = require('./gender-seeder')

module.exports = {
  async up(queryInterface, Sequelize) {
    await RoleSeeder.up(queryInterface, Sequelize)
    await UserSeeder.up(queryInterface, Sequelize)
    await CategoriesSeeder.up(queryInterface, Sequelize)
    await GenderSeeder.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {}
}
