import { Router } from 'express';
import TodoValidator from '../../middleware/validators/TodoValidator';
import TodoController from '../../controllers/todoController';
import Middleware from '../../middleware';
import { tryCatch } from '../../utils/response';

const router = Router();

router.get('/list', tryCatch(TodoController.getAllTodos));

router.post(
  '/add',
  TodoValidator.checkAddTodo(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.addNewTodo)
);

router.put(
  '/update/:id',
  TodoValidator.checkAddTodo(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(TodoController.updateTodo)
);

router.delete(
  '/delete/:id',
  Middleware.verifyToken,
  tryCatch(TodoController.deleteTodo)
);

export default router;
