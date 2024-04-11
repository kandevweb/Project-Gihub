import { Category } from '../types/category.type '
import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { CategoryInput } from '../types/category.type '
import { CustomErrorHandler } from '../utils/ErrorHandling'

class categorySevrice {
  async fetchAllCategory() {
    const categories = await models.Category.findAll()

    return {
      message: 'Thanh cong',
      data: {
        categories
      }
    }
  }
  // Thêm mới categories
  async addNewCategory(data: CategoryInput) {
    const { category_name, description } = data

    const [newCategory, created] = await models.Category.findOrCreate({
      where: { category_name },
      defaults: {
        category_name,
        description
      }
    })

    if (!created) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Categories này đã tồn tại!')
    }

    return { message: 'Thêm mới role thành công', data: newCategory }
  }
}

export default new categorySevrice()
