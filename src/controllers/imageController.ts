import { Request, Response } from 'express'
import roleService from '../services/roleService'
import { ImageInput } from '../types/image.type'
import { sendResponseSuccess } from '../utils/response'
import imageService from '../services/imageService'

class imageController {
  // Danh sách image
  async getAllImages(req: Request, res: Response) {
    const data = await imageService.getAllImages()

    sendResponseSuccess(res, data)
  }

  // Thêm mới image
  async addNewImage(req: Request, res: Response) {
    const imageData: ImageInput = req.body
    const data = await imageService.addNewImage(imageData)
    sendResponseSuccess(res, data)
  }

  // Xóa image
  async deleteImage(req: Request, res: Response) {
    const { id } = req.params
    const data = await imageService.deleteImage(id)
    sendResponseSuccess(res, data)
  }

  // update image
  async updateImage(req: Request, res: Response) {
    const { id } = req.params
    const imageData: ImageInput = req.body
    const data = await imageService.updateImage(id, imageData)
    sendResponseSuccess(res, data)
  }
}

export default new imageController()
