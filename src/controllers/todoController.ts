import {  Request, Response } from 'express'
import todoService from '../services/todoService'
import { sendResponseSuccess } from '../utils/response'
import { TodoInput } from '../types/todo.type'

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
  // update todo 
    async updateTodo(req: Request, res: Response) {
    const { todoId } = req.params
    const todoData: TodoInput = req.body
    const data = await todoService.updateTodo(todoId, todoData)
    sendResponseSuccess(res, data)
  }

  // Chi tiết Todo
  async todoDetail(req: Request, res: Response) {
    const { todoId } = req.params
    const data = await todoService.todoDetail(todoId)
    sendResponseSuccess(res, data)
  }
}

export default new TodoController()
