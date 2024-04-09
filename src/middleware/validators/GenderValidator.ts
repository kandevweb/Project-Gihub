import { body } from 'express-validator'

class GenderValidator {
  checkAddGender() {
    return [body('gender_name').notEmpty().withMessage('Giới tính không được để trống!').trim()]
  }
}

export default new GenderValidator()
