import { NextFunction, Request, Response } from 'express';
import todoService from '../services/todoService';
import { sendResponseSuccess } from '../utils/response';
import { StatusCodes } from 'http-status-codes';
import { CustomErrorHandler } from '../utils/ErrorHandling';
import { TodoInput } from '../types/todo.type';
import models from '../db/models';

class TodoController {
  // Lấy danh sách todo
  async getAllTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await todoService.getAllTodos();
      sendResponseSuccess(res, data);
    } catch (error) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không l đc người dùng!');
    }
  }

  // Thêm mới todo
  async addNewTodo(req: Request, res: Response) {
    try {
      const todoData = req.body;
      const data = await todoService.addNewTodo(todoData);
      sendResponseSuccess(res, data);
    } catch (error) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không thêm đc người dùng!');
    }
  }

  // Sửa thông tin todo
  

  // Xóa todo
  async deleteTodo(req: Request, res: Response) {
    try {
      const todoId = req.params.id;
      await todoService.deleteTodo(todoId);
      sendResponseSuccess(res, { message: 'Xóa todo thành công', data: {} });
    } catch (error) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không Xóa đc người dùng!');
    }
    
  }
  async TodoDetail(req: Request, res: Response) {
    try {
      const todoId = req.params.id;
      const data = await todoService.TodoDetail(todoId);
      sendResponseSuccess(res, data);
    } catch (error) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không Tìm được chi tiết người dùng!');
    }
  }
  
  
}

export default new TodoController();
