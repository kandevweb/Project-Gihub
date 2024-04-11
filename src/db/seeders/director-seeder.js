'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Directors',
      [
        {
          director_id: 'kha8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          fullname: 'Sex',
          gender_id: 'qwe8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          nationality: 'việt nam1',
          birth_day: '2002/10/1',
          biography: 'đẹp trai'
        },
        {
          director_id: 'bbt8d4a3-1a97-474d-bd1e-1d775e75fhy8',
          fullname: 'hành động',
          gender_id: 'rty8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          nationality: 'thái lan',
          birth_day: '2002/02/06',
          biography: 'to khỏe'
        },
        {
          director_id: 'hkt8d4a3-1a97-474d-bd1e-1d775e75fp0a',
          fullname: '2 người',
          gender_id: 'uio8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          nationality: 'mỹ',
          birth_day: '2000/10/5',
          biography: 'kịch tính'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directors', null, {})
  }
}
