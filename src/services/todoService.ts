import { CustomErrorHandler } from '../utils/ErrorHandling'
import { StatusCodes } from 'http-status-codes'
import { Todo, TodoInput } from '../types/todo.type'
import models from '../db/models'

class TodoService {
  async getAllTodos() {
    const todos: Todo[] = await models.Todo.findAll()

    return {
      message: 'Lấy danh sách todo thành công.',
      data: {
        todos
      }
    }
  }

  async addNewTodo(data: TodoInput) {
    const newTodo = await models.Todo.create(data)

    return { message: 'Thêm mới todo thành công', data: newTodo }
  }

  async deleteTodo(todoId: string) {
    const todo = await models.Todo.findByPk(todoId)

    if (!todo) throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Todo không tồn tại!')

    await todo.destroy()

    return {
      message: 'Xóa thành công!',
      data: {
        todo
      }
    }
  }

  async TodoDetail(todoId: string) {
    const todoDetail = await models.Todo.findByPk(todoId)

    if (!todoDetail) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy todo!')
    }

    return {
      message: 'Chi tiết todo.',
      data: {
        todo: todoDetail
      }
    }
  }
}

export default new TodoService()
