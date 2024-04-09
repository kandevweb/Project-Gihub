import models from '../db/models'
import { Gender, GenderInput } from '../types/gender.type'

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

  async addNewGender(gender: GenderInput){
    
  }
}

export default new genderService()
