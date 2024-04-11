import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import categoryController from '../../controllers/categoryController'
import CategoryValidator from '../../middleware/validators/CategoryValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', Middleware.verifyToken, tryCatch(categoryController.fetchAllCategory))
router.post(
  '/add',
  CategoryValidator.checkAddCategory(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(categoryController.addNewCategory)
)
router.put('/update/:category_id', tryCatch(categoryController.updateCategory))

router.delete('/delete/:category_id', tryCatch(categoryController.deleteCategory))

export default router
