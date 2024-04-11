import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import directorController from '../../controllers/directorController'
import DirectorsValidator from '../../middleware/validators/DirectorValidator'
import Middleware from '../../middleware'
//hihi
const router = Router()
router.get('/list', tryCatch(directorController.fetchAllDirectors))
router.post(
  '/add',
  DirectorsValidator.checkAddDirectors(),
  Middleware.handleValidatorError,
  tryCatch(directorController.addNewDirectors)
)

export default router
