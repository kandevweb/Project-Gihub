import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import postController from '../../controllers/postController'
import Middleware from '../../middleware'
import PostValidator from '../../middleware/validators/PostValidator'

const router = Router()

router.get('/list', Middleware.verifyToken, tryCatch(postController.fetchAllPost))

router.post(
  '/add',
  PostValidator.checkAddNewPost(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(postController.addNewPost)
)

router.put('/update/:post_id', Middleware.verifyToken, tryCatch(postController.updatePost))

router.delete('/delete/:post_id', Middleware.verifyToken, tryCatch(postController.deletePost))

export default router
