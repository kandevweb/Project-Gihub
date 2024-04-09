import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import categorieService from '../services/categorieService'
import { sendResponseSuccess } from '../utils/response'
import { CategoryInput } from '../types/categorie.type '


class categorieController {
  async fetchAllCategorie(req: Request, res: Response) {
    const data = await categorieService.fetchAllCategories()

    sendResponseSuccess(res, data)
  }
  async addNewCategories(req: Request, res: Response){
    const category: CategoryInput = req.body
    const data = await categorieService.addNewCategories(category)

    sendResponseSuccess(res, data)
  }

}
export default new categorieController()
