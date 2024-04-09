import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import categorieController from '../../controllers/categorie.controller'
import CategorieValidator from '../../middleware/validators/CategorieValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', tryCatch(categorieController.fetchAllCategorie))
router.post(
  '/add',
  CategorieValidator.checkAddCategories(),
  Middleware.handleValidatorError,
  tryCatch(categorieController.addNewCategories)
)

export default router
