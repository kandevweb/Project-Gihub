'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          post_id: 'p2atd4a3-1a97-474d-bd1e-1d775e75fjxp',
          content:
            'Monkey D. Luffy, còn gọi là Luffy "Mũ Rơm" là nhân vật chính trong bộ manga One Piece của Nhật Bản do Oda Eiichiro sáng tạo.',
          user_id: 'lp322c73-f703-4b16-847d-f61bae053p9i',
          image_id: 'pa122c73-f7dsdsd03-4b16-847d-f61bae053px2'
        },
        {
          post_id: 'xr2yd4a3-1a97-474d-bd1e-1d775e75fxm8',
          content:
            'Roronoa Zoro, biệt danh "Thợ săn hải tặc" Zoro là một nhân vật hư cấu và là một trong những nhân vật chính của loạt anime và manga One Piece của Eiichiro Oda',
          user_id: 'afa22c73-f703-4b16-847d-f61bae0534b2',
          image_id: 'xbyl2c74-f7dsdsd03-4b16-847d-f61bae053pp12'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {})
  }
}
