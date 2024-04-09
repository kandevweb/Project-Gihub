import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import genderService from '../services/genderService'
import { sendResponseSuccess } from '../utils/response'

class genderController {
  async fetchAllGenders(req: Request, res: Response) {
    const data = await genderService.fetchAllGenders()

    sendResponseSuccess(res, data)
  }
}

export default new genderController()
