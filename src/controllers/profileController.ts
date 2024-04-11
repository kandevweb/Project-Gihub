import { Request, Response } from 'express'
import { sendResponseSuccess } from '../utils/response'
import profileService from '../services/profileService'

class profileController {
  async updateProfile(req: Request, res: Response) {
    const { user_id } = req.params

    const data = await profileService.updateProfile(user_id)

    sendResponseSuccess(res, data)
  }
}

export default new profileController()
