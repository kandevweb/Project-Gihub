import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { Gender, GenderInput } from '../types/gender.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class genderService {
  async fetchAllGenders() {
    const genders: Gender[] = await models.Gender.findAll()

    return {
      message: 'Thanh cong',
      data: {
        genders
      }
    }
  }

  async addNewGender(gender: GenderInput) {
    const { gender_name } = gender

    const [newGender, created] = await models.Gender.findOrCreate({
      where: { gender_name },
      defaults: {
        gender_name
      }
    })
    if (!created) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Gender này đã tồn tại!')
    }

    return { message: 'Thêm mới Genders thành công', data: newGender }
  }
}

export default new genderService()
