import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import categoryController from '../../controllers/categoryController'
import CategoryValidator from '../../middleware/validators/CategoryValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', tryCatch(categoryController.fetchAllCategory))
router.post(
  '/add',
  CategoryValidator.checkAddCategory(),
  Middleware.handleValidatorError,
  tryCatch(categoryController.addNewCategory)
)

export default router
