import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { DirectorInput, DirectorUpdate } from '../types/director.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class directorSevrice {
  async fetchAllDirectors() {
    const directors = await models.Director.findAll()

    return {
      message: 'Thành Công',
      data: {
        directors
      }
    }
  }
  // Thêm mới directors
  async addNewDirector(data: DirectorInput) {
    const { fullname, gender_id, nationality, birth_day, biography } = data

    const [newDirector, created] = await models.Director.findOrCreate({
      where: { fullname },
      defaults: {
        fullname,
        gender_id,
        nationality,
        birth_day,
        biography
      }
    })
    if (!created) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Directors này đã tồn tại!')
    }

    return { message: ' Đã thêm mới directors thành công', data: newDirector }
  }
  // Cập nhật Director
  async updateDirector(director_id: string, data: DirectorUpdate) {
    const director = await models.Director.findByPk(director_id)

    if (!director) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Director không tồn tại!')
    }

    await director.update(data)

    return {
      message: 'Cập nhật Category thành công',
      data: {
        post: director
      }
    }
  }

  // Xóa director
  async deleteDirector(director_id: string) {
    const director = await models.Director.findByPk(director_id)

    if (!director) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Director không tồn tại!')
    }

    await director.destroy()

    return {
      message: 'Xóa Director thành công',
      data: {
        director
      }
    }
  }
}

export default new directorSevrice()
