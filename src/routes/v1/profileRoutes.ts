import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import Middleware from '../../middleware'
import profileController from '../../controllers/profileController'
import genderController from '../../controllers/genderController'

const router = Router()

router.get('/get/:user_id', tryCatch(genderController.fetchAllGenders))

router.post('/update/:user_id', tryCatch(profileController.updateProfile))

export default router
