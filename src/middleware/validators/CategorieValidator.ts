import { body } from 'express-validator'

class CategorieValidator {
  checkAddCategories() {
    return [body('category_name').notEmpty().withMessage('Categories không được để trống!').trim()]
  }
}
export default new CategorieValidator()
