import { Router } from 'express'
import genderController from '../../controllers/genderController'
import { tryCatch } from '../../utils/response'
import Middleware from '../../middleware'
import GenderValidator from '../../middleware/validators/GenderValidator'

const router = Router()

router.get('/list', tryCatch(genderController.fetchAllGenders))
router.post(
  '/add',
  GenderValidator.checkAddGender(),
  Middleware.handleValidatorError,
  tryCatch(genderController.addNewGender)
)

export default router
