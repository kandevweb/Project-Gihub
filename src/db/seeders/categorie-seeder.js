'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          category_id: 'dsw8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          category_name: 'Sex',
          description: 'Quốc 20cm'
        },
        {
          category_id: 'sde8d4a3-1a97-474d-bd1e-1d775e75fhy8',
          category_name: 'hành động',
          description: 'to dài rộng'
        },
        {
          category_id: 'usr8d4a3-1a97-474d-bd1e-1d775e75fp0a',
          category_name: '2 người',
          description: 'hấp dẫn người xem '
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}
