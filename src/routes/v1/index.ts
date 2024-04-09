import { Router } from 'express'
import roleRoutes from './roleRoutes'
import commonRoutes from './commonRoutes'
import userRoutes from './userRoutes'
import categoryRoutes from './categorieRoutes'
import { API_V1 } from '../../constants/apiPaths'
const router = Router()


router.use(API_V1.common, commonRoutes)
router.use(API_V1.role, roleRoutes)
router.use(API_V1.user, userRoutes)
router.use(API_V1.category, categoryRoutes)

export default router
