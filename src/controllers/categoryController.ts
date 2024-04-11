import { Response, Request } from 'express'
import categoryService from '../services/categoryService'
import { sendResponseSuccess } from '../utils/response'
import { CategoryInput, CategoryUpdate } from '../types/category.type'

class categoryController {
  // Lấy danh sách
  async fetchAllCategory(req: Request, res: Response) {
    const data = await categoryService.fetchAllCategory()

    sendResponseSuccess(res, data)
  }
  // Thêm category
  async addNewCategory(req: Request, res: Response) {
    const category: CategoryInput = req.body
    const data = await categoryService.addNewCategory(category)

    sendResponseSuccess(res, data)
  }
  // Cập nhật category
  async updateCategory(req: Request, res: Response) {
    const { category_id } = req.params
    const category: CategoryUpdate = req.body

    const data = await categoryService.updateCategory(category_id, category)

    sendResponseSuccess(res, data)
  }
  // Xóa category
  async deleteCategory(req: Request, res: Response) {
    const { category_id } = req.params

    const data = await categoryService.deleteCategory(category_id)

    sendResponseSuccess(res, data)
  }
}
export default new categoryController()
