'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          todo_id: '474d-bd1e-1d775e75fjpe',
          todo_name: 'Học React',
          description: '1',
          completed: 'Hoàn thành',
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i'
        },
        {
            todo_id: '475d-bd1e-1d775e75fjjj',
            todo_name: 'Làm dự án',
            description: '1',
            completed: 'Chưa hoàn thành',
            user_id: 'afa22c73-f703-4b16-847d-f61bae0534b2'
          }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {})
  }
}
