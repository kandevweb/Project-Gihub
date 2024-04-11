import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import categoryService from '../services/categoryService'
import { sendResponseSuccess } from '../utils/response'
import { CategoryInput } from '../types/category.type '

class categoryController {
  async fetchAllCategory(req: Request, res: Response) {
    const data = await categoryService.fetchAllCategory()

    sendResponseSuccess(res, data)
  }
  async addNewCategory(req: Request, res: Response) {
    const category: CategoryInput = req.body
    const data = await categoryService.addNewCategory(category)

    sendResponseSuccess(res, data)
  }
}
export default new categoryController()
