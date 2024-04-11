'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {},
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {})
    await queryInterface.bulkDelete('Posts', null, {})
    await queryInterface.bulkDelete('Todos', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
    await queryInterface.bulkDelete('Genders', null, {})
    await queryInterface.bulkDelete('Images', null, {})
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Roles', null, {})
  }
}
