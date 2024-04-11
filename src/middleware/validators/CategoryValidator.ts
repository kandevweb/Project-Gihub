import { body } from 'express-validator'

class CategoryValidator {
  checkAddCategory() {
    return [body('category_name').notEmpty().withMessage('Categories không được để trống!').trim()]
  }
}
export default new CategoryValidator()
