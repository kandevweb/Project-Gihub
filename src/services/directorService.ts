import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { DirectorsInput } from '../types/director.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class directorsSevrice {
  async fetchAllDirectors() {
    const directors = await models.Directors.findAll()

    return {
      message: 'Thành Công',
      data: {
        directors
      }
    }
  }
  // Thêm mới directors
  async addNewDirectors(data: DirectorsInput) {
    const { fullname, gender_id, nationality, birth_day, biography } = data

    const [newDirectors, created] = await models.Directors.findOrCreate({
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

    return { message: ' Đã thêm mới directors thành công', data: newDirectors }
  }
}

export default new directorsSevrice()
