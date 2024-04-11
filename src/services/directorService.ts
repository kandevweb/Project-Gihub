import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { DirectorInput } from '../types/director.type'
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
}

export default new directorSevrice()
