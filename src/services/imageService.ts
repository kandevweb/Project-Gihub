import models from '../db/models'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from '../utils/ErrorHandling'
import { Image, ImageInput } from '../types/image.type'

class imageService {
  // Lấy danh sách role
  async getAllImages() {
    const data: Image[] = await models.Image.findAll()

    return {
      message: 'Lấy danh sách image thành công.',
      data
    }
  }

  // Thêm mới image
  async addNewImage(data: ImageInput) {
    const { url } = data

    const newImage = await models.Image.create({
      url: url
    })

    return { message: 'Thêm mới image thành công', data: newImage }
  }

  // Xóa image
  async deleteImage(id: string) {
    const imageToDelete = await models.Image.findOne({
      where: { image_id: id }
    })

    if (!imageToDelete) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Hình ảnh không tồn tại.')
    }

    await models.Image.destroy({
      where: { image_id: id }
    })

    return {
      message: 'Xóa hình ảnh thành công.',
      data: imageToDelete
    }
  }

  // update image
  async updateImage(id: string, data: ImageInput) {
    const imageToUpdate = await models.Image.findOne({
      where: { image_id: id }
    })

    if (!imageToUpdate) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Hình ảnh không tồn tại.')
    }

    const newImage = await models.Image.update(data, {
      where: { image_id: id }
    })

    return {
      message: 'Cap nhap hinh anh thanh cong.',
      data: imageToUpdate
    }
  }
}

export default new imageService()
