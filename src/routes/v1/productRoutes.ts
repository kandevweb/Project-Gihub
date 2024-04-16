import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import productController from '../../controllers/productController'

const router = Router()

router.get('/list', tryCatch(productController.fetchAllProducts))

router.post('/add', tryCatch(productController.addNewPost))

// ĐÂY LÀ DÒNG CODE UPDATE

export default router
