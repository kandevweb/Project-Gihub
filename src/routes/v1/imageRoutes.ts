import { Router } from 'express'
import imageController from '../../controllers/imageController'
import Middleware from '../../middleware'
import ImageValidator from '../../middleware/validators/ImageValidator'
import { tryCatch } from '../../utils/response'
const router = Router()

router.get('/list', tryCatch(imageController.getAllImages))
router.post(
  '/add',
  ImageValidator.checkAddAndUpdateImage(),
  Middleware.handleValidatorError,
  tryCatch(imageController.addNewImage)
)
router.delete('/delete/:id', tryCatch(imageController.deleteImage))
router.put(
  '/update/:id',
  ImageValidator.checkAddAndUpdateImage(),
  Middleware.handleValidatorError,
  tryCatch(imageController.updateImage)
)

export default router
