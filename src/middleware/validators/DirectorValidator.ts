import { body } from 'express-validator'

class DirectorValidator {
  checkAddDirectors() {
    return [body('fullname').notEmpty().withMessage('Directors không thể để trống!').trim()]
  }
}
export default new DirectorValidator()
