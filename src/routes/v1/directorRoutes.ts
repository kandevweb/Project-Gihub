import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import directorController from '../../controllers/directorController'
import DirectorValidator from '../../middleware/validators/DirectorValidator'
import Middleware from '../../middleware'
//hihi
const router = Router()
router.get('/list', tryCatch(directorController.fetchAllDirector))
router.post(
  '/add',
  DirectorValidator.checkAddDirectors(),
  Middleware.handleValidatorError,
  tryCatch(directorController.addNewDirector)
)

export default router
