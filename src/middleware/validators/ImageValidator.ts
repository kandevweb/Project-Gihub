import { body } from 'express-validator'

class ImageValidator {
  checkAddAndUpdateImage() {
    return [body('url').notEmpty().trim().withMessage('Url không được để trống !')]
  }
}

export default new ImageValidator()
