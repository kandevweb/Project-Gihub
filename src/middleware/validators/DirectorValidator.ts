import { body } from 'express-validator'

class DirectorsValidator {
  checkAddDirectors() {
    return [body('fullname').notEmpty().withMessage('Directors không được để trống!').trim()]
  }
}
export default new DirectorsValidator()
