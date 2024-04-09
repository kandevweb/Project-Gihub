import { GenderInput } from './../types/gender.type'
import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import genderService from '../services/genderService'
import { sendResponseSuccess } from '../utils/response'

class genderController {
  async fetchAllGenders(req: Request, res: Response) {
    const data = await genderService.fetchAllGenders()

    sendResponseSuccess(res, data)
  }
  async addNewGender(req: Request, res: Response) {
    const gender: GenderInput = req.body
    const data = await genderService.addNewGender(gender)

    sendResponseSuccess(res, data)
  }
}

export default new genderController()
