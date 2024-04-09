'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          todo_id: 'pa012c73-f703-4b16-847d-f61bae059102',
          todo_name: 'Học React',
          description: 'Kiến thức reactjs cơ bản',
          completed: false,
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i'
        },
        {
          todo_id: 'x23la2c73-f703-4b16-847d-f61bae05mp0t',
          todo_name: 'Làm dự án',
          description: 'Làm dự án tốt nghiệp khóa 18.2',
          completed: false,
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
