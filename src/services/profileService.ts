import { profile } from 'console'
import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { Profile, ProfileInput, ProfileUpdate } from '../types/profile.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class profileService {
  async fetchAllProfile() {
    const profiles: Profile[] = await models.Profile.findAll()

    return {
      message: 'Thanh cong',
      data: {
        profiles
      }
    }
  }
  // Cập nhật profile
  async updateProfile(user_id: string) {
    const profile = await models.Profile.findOne({
      where: { user_id }
    })

    return {
      message: 'Cập nhật thành công',
      data: {
        profile
      }
    }
  }
}

export default new profileService()
