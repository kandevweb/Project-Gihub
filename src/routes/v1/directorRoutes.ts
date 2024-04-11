import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import directorController from '../../controllers/directorController'
import DirectorValidator from '../../middleware/validators/DirectorValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', Middleware.verifyToken, tryCatch(directorController.fetchAllDirector))
router.post(
  '/add',
  DirectorValidator.checkAddDirectors(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(directorController.addNewDirector),

  router.put('/update/:director_id', tryCatch(directorController.updateDirector)),

  router.delete('/delete/:director_id', tryCatch(directorController.deleteDirector))
)

export default router
