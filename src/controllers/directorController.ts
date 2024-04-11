import { Response, Request } from 'express'
import directorService from '../services/directorService'
import { sendResponseSuccess } from '../utils/response'
import { DirectorInput, DirectorUpdate } from '../types/director.type'

class directorController {
  async fetchAllDirector(req: Request, res: Response) {
    const data = await directorService.fetchAllDirectors()

    sendResponseSuccess(res, data)
  }
  // thêm Director
  async addNewDirector(req: Request, res: Response) {
    const directors: DirectorInput = req.body
    const data = await directorService.addNewDirector(directors)

    sendResponseSuccess(res, data)
  }
  // Cập nhật Director
  async updateDirector(req: Request, res: Response) {
    const { director_id } = req.params
    const category: DirectorUpdate = req.body

    const data = await directorService.updateDirector(director_id, category)

    sendResponseSuccess(res, data)
  }
  // Xóa Director
  async deleteDirector(req: Request, res: Response) {
    const { director_id } = req.params

    const data = await directorService.deleteDirector(director_id)

    sendResponseSuccess(res, data)
  }
}
export default new directorController()
