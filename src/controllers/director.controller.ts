import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import directorsService from '../services/directorService'
import { sendResponseSuccess } from '../utils/response'
import { DirectorsInput } from '../types/director.type'

class directorsController {
  async fetchAllDirectors(req: Request, res: Response) {
    const data = await directorsService.fetchAllDirectors()

    sendResponseSuccess(res, data)
  }
  async addNewDirectors(req: Request, res: Response) {
    const directors: DirectorsInput = req.body
    const data = await directorsService.addNewDirectors(directors)

    sendResponseSuccess(res, data)
  }
}
export default new directorsController()
