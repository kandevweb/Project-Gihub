import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { CategoryInput } from '../types/categorie.type '
import { CustomErrorHandler } from '../utils/ErrorHandling'

class categorieSevrice {
  async fetchAllCategories() {
    const categorie = await models.Categories.findAll()

    return {
      message: 'Thanh cong',
      data: {
        categorie
      }
    }
  }
  // Thêm mới categories
  async addNewCategories(data: CategoryInput) {
    const { category_name, description } = data

    const [newCategories, created] = await models.Categories.findOrCreate({
      where: { category_name },
      defaults: {
        category_name,
        description
      }
    })

    if (!created) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Categories này đã tồn tại!')
    }

    return { message: 'Thêm mới role thành công', data: newCategories }
  }
}

export default new categorieSevrice()
