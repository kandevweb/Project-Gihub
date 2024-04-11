import { Category, CategoryUpdate } from '../types/category.type'
import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { CategoryInput } from '../types/category.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class categorySevrice {
  // Lấy Danh sách
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
    return { message: 'Thêm mới Categories thành công', data: newCategory }
  }
  // Cập nhật category
  async updateCategory(category_id: string, data: CategoryUpdate) {
    const category = await models.Category.findByPk(category_id)

    if (!category) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Category không tồn tại!')
    }

    await category.update(data)

    return {
      message: 'Cập nhật Category thành công',
      data: {
        post: category
      }
    }
  }

  // Xóa category
  async deleteCategory(category_id: string) {
    const category = await models.Category.findByPk(category_id)

    if (!category) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Category không tồn tại!')
    }

    await category.destroy()

    return {
      message: 'Xóa Category thành công',
      data: {
        category
      }
    }
  }
}

export default new categorySevrice()
