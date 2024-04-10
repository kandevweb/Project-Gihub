import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import directorsController from '../../controllers/director.controller'
import DirectorsValidator from '../../middleware/validators/DirectorValidator'
import Middleware from '../../middleware'
//hihi
const router = Router()
router.get('/list', tryCatch(directorsController.fetchAllDirectors))
router.post(
  '/add',
  DirectorsValidator.checkAddDirectors(),
  Middleware.handleValidatorError,
  tryCatch(directorsController.addNewDirectors)
)

export default router
