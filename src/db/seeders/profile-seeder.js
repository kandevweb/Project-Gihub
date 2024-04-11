'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Profiles',
      [
        {
          profile_id: 'gt78d4a3-1a97-474d-bd1e-1d775e75fjpe',
          biography: ' Đã đi Tù',
          profile_picture: 'pa122c73-f7dsdsd03-4b16-847d-f61bae053px2',
          cover_photo: 'pa122c73-f7dsdsd03-4b16-847d-f61bae053px2',
          date_of_birth: '2000/6/11',
          education: 'FPT Colleague',
          job: 'Phò',
          alias: 'Miss Phò',
          gender_id: 'gt78d4a3-1a97-474d-bd1e-1d775e75fjpe',
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {})
  }
}
