import { body } from 'express-validator'

class DirectorsValidator {
  checkAddDirectors() {
    return [body('fullname').notEmpty().withMessage('Directors không thể để trống!').trim()]
  }
}
export default new DirectorsValidator()
