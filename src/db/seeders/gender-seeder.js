'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Genders',
      [
        {
          gender_id: 'gt78d4a3-1a97-474d-bd1e-1d775e75fjpe',
          gender_name: 'Nam'
        },
        {
          gender_id: 'qwe8d4a3-1a97-474d-bd1e-1d775e75fhy8',
          gender_name: 'Nữ'
        },
        {
          gender_id: 'cdc8d4a3-1a97-474d-bd1e-1d775e75fp0a',
          gender_name: 'LGBT'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genders', null, {})
  }
}
