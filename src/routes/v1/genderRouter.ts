import { Router } from 'express'
import genderController from '../../controllers/genderController'
import { tryCatch } from '../../utils/response'

const router = Router()

router.get('/list', tryCatch(genderController.fetchAllGenders))

export default router
