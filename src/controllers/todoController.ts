import { NextFunction, Request, Response } from 'express';
import todoService from '../services/todoService';
import { sendResponseSuccess } from '../utils/response';
import { StatusCodes } from 'http-status-codes';
import { CustomErrorHandler } from '../utils/ErrorHandling';

class TodoController {
  // Lấy danh sách todo
  async getAllTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await todoService.getAllTodos();
      sendResponseSuccess(res, data);
    } catch (error) {
      next(new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tồn tại người dùng!'));
    }
  }

  // Thêm mới todo
  async addNewTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todoData = req.body;
      const data = await todoService.addNewTodo(todoData);
      sendResponseSuccess(res, data);
    } catch (error) {
      next(new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không thêm được người dùng!'));
    }
  }

  // Sửa thông tin todo
  async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todoId = req.params.id;
      const todoData = req.body;
      const data = await todoService.updateTodo(todoId, todoData);
      sendResponseSuccess(res, data);
    } catch (error) {
      next(new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không Sửa người dùng!'));
    }
  }

  // Xóa todo
  async deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todoId = req.params.id;
      await todoService.deleteTodo(todoId);
      sendResponseSuccess(res, { message: 'Xóa todo thành công', data: {} });
    } catch (error) {
      next(new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không Xóa đc người dùng!'));
    }
  }
  
  
}

export default new TodoController();
