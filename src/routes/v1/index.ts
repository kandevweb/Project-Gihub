import { Router } from 'express'
import roleRoutes from './roleRoutes'
import commonRoutes from './commonRoutes'
import userRoutes from './userRoutes'
import imageRoutes from './imageRoutes'
import todoRoutes from './todoRoutes'
import categoryRoutes from './categorieRoutes'
import genderRoutes from './genderRouter'
import postRoutes from './postRoutes'
import profileRoutes from './profileRoutes'
import { API_V1 } from '../../constants/apiPaths'

const router = Router()

router.use(API_V1.common, commonRoutes)
router.use(API_V1.role, roleRoutes)
router.use(API_V1.user, userRoutes)
router.use(API_V1.image, imageRoutes)
router.use(API_V1.todo, todoRoutes)
router.use(API_V1.category, categoryRoutes)
router.use(API_V1.gender, genderRoutes)
router.use(API_V1.post, postRoutes)
router.use(API_V1.profile, profileRoutes)

export default router
