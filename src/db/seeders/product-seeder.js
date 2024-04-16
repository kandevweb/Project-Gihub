'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          product_id: 'xa122c73-f703-4b16-847d-f61bae059132s',
          product_name: 'Samsung Galaxy',
          price: 25000000,
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
}
