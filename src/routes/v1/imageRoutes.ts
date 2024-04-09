import { Router } from 'express'
import roleController from '../../controllers/roleController'
import RoleValidator from '../../middleware/validators/RoleValidator'
import Middleware from '../../middleware'
import { tryCatch } from '../../utils/response'
import imageController from '../../controllers/imageController'
const router = Router()

router.get('/list', tryCatch(imageController.getAllImages))
router.post('/add', tryCatch(imageController.addNewImage))
router.delete('/delete/:id', tryCatch(imageController.deleteImage))
router.put('/update/:id', tryCatch(imageController.updateImage))

export default router
