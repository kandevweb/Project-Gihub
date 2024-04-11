'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Casts',
      [
        {
          cast_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          full_name: 'Nguyen Quang Linh',
          gender_id: 'gt78d4a3-1a97-474d-bd1e-1d775e75fjpe',
          avatar_url: 'pa122c73-f7dsdsd03-4b16-847d-f61bae053px2',
          nationality: 'VietNam',
          birth_day: '2003/08/02',
          biography: 'So handsome'
        },
        {
          cast_id: 'bcb8d4a3-1a11-474d-bd1e-1d775e65flll',
          full_name: 'Nguyen Phu Quoc',
          gender_id: 'gt78d4a3-1a97-474d-bd1e-1d775e75fjpe',
          avatar_url: 'xbyl2c74-f7dsdsd03-4b16-847d-f61bae053pp12',
          nationality: 'America',
          birth_day: '2003/08/02',
          biography: 'So handsome'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Casts', null, {})
  }
}
