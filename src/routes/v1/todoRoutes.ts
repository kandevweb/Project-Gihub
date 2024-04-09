import { Router } from 'express';
import TodoValidator from '../../middleware/validators/TodoValidator';
import TodoController from '../../controllers/todoController';
import Middleware from '../../middleware';
import { tryCatch } from '../../utils/response';

const router = Router();

router.get('/list', 
Middleware.handleValidatorError,
Middleware.verifyToken,
tryCatch(TodoController.getAllTodos));

router.post(
  '/add',
  TodoValidator.checkAddTodo(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.addNewTodo)
);



router.delete(
  '/delete/:id',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.deleteTodo)
);
router.get(
  '/detail/:id',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.TodoDetail)
)

export default router;
