import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import categorieController from '../../controllers/categorie.controller'
import CategoryValidator from '../../middleware/validators/CategoryValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', tryCatch(categorieController.fetchAllCategorie))
router.post(
  '/add',
  CategoryValidator.checkAddCategories(),
  Middleware.handleValidatorError,
  tryCatch(categorieController.addNewCategories)
)

export default router
