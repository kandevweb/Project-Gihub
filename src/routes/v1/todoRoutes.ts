import { Router } from 'express'
import TodoValidator from '../../middleware/validators/TodoValidator'
import TodoController from '../../controllers/todoController'
import Middleware from '../../middleware'
import { tryCatch } from '../../utils/response'
import todoController from '../../controllers/todoController'

const router = Router()

router.get('/list', Middleware.handleValidatorError, Middleware.verifyToken, tryCatch(TodoController.getAllTodos))

router.post(
  '/add',
  TodoValidator.checkAddTodo(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.addNewTodo)
)

router.delete(
  '/delete/:todoId',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.deleteTodo)
)

router.put(
  '/update/:todoId',
  TodoValidator.checkAddTodo(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(todoController.updateTodo)
);
router.get(
  '/detail/:todoId',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.todoDetail)
)

export default router
