import { NextFunction, Request, Response } from 'express'
import todoService from '../services/todoService'
import { sendResponseSuccess } from '../utils/response'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from '../utils/ErrorHandling'
import { TodoInput } from '../types/todo.type'
import models from '../db/models'

class TodoController {
  // Lấy danh sách todo
  async getAllTodos(req: Request, res: Response) {
    const data = await todoService.getAllTodos()

    sendResponseSuccess(res, data)
  }

  // Thêm mới todo
  async addNewTodo(req: Request, res: Response) {
    const todoData: TodoInput = req.body

    const data = await todoService.addNewTodo(todoData)

    sendResponseSuccess(res, data)
  }

  // Xóa todo
  async deleteTodo(req: Request, res: Response) {
    const { todoId } = req.params

    const data = await todoService.deleteTodo(todoId)

    sendResponseSuccess(res, data)
  }

  async TodoDetail(req: Request, res: Response) {
    const { todoId } = req.params

    const data = await todoService.TodoDetail(todoId)

    sendResponseSuccess(res, data)
  }
}

export default new TodoController()
