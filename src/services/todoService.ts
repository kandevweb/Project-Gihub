import { CustomErrorHandler } from '../utils/ErrorHandling';
import { StatusCodes } from 'http-status-codes';
import { TodoAttributes } from '../db/models/Todo';
import Todo from '../db/models/Todo';
import { TodoInput } from '../types/todo.type';

class TodoService {
  async getAllTodos() {
    const data: TodoAttributes[] = await Todo.findAll();

    return {
      message: 'Lấy danh sách todo thành công.',
      data
    };
  }

  async addNewTodo(data: TodoAttributes) {
    const { todo_name, description, completed, user_id } = data;

    const newTodo = await Todo.create({
      todo_name,
      description,
      completed,
      user_id
    });

    return { message: 'Thêm mới todo thành công', data: newTodo };
  }

  

  async deleteTodo(todoId: string) {
    const deletedRowCount = await Todo.destroy({ where: { todo_id: todoId } });

    if (!deletedRowCount) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy todo để xóa!');
    }

    return { message: 'Xóa todo thành công' };
  }
  async TodoDetail(todoId: string) {
    const todoDetail = await Todo.findByPk(todoId);

    if (!todoDetail) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy todo!');
    }

    return { message: 'Lấy chi tiết todo thành công.', data: todoDetail };
  }
}

export default new TodoService();
