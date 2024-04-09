'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          image_id: 'lp322c73-f7dsdsd03-4b16-847d-f61bae053p9i',
          url: 'https://i.pinimg.com/564x/c5/20/86/c5208616039e8375e09ebb4188cf0a32.jpg'
        },
        {
          image_id: 'lp322c74-f7dsdsd03-4b16-847d-f61bae053p9ii',
          url: 'https://i.pinimg.com/736x/c7/e6/d8/c7e6d841fce16371ef777bb04a660ab7.jpg'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {})
  }
}
