import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import directorService from '../services/directorService'
import { sendResponseSuccess } from '../utils/response'
import { DirectorInput } from '../types/director.type'

class directorController {
  async fetchAllDirector(req: Request, res: Response) {
    const data = await directorService.fetchAllDirectors()

    sendResponseSuccess(res, data)
  }
  async addNewDirector(req: Request, res: Response) {
    const directors: DirectorInput = req.body
    const data = await directorService.addNewDirector(directors)

    sendResponseSuccess(res, data)
  }
}
export default new directorController()
