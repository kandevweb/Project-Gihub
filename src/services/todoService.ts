import { CustomErrorHandler } from '../utils/ErrorHandling';
import { StatusCodes } from 'http-status-codes';
import { TodoAttributes } from '../db/models/Todo';
import Todo from '../db/models/Todo';

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

  async updateTodo(todoId: string, data: TodoAttributes) {
    const { todo_name, description, completed, user_id } = data;

    const updatedTodo = await Todo.update(
      { todo_name, description, completed, user_id },
      { where: { todo_id: todoId }, returning: true }
    );

    if (!updatedTodo[0]) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy todo để cập nhật!');
    }

    return { message: 'Cập nhật todo thành công', data: updatedTodo[1][0] };
  }

  async deleteTodo(todoId: string) {
    const deletedRowCount = await Todo.destroy({ where: { todo_id: todoId } });

    if (!deletedRowCount) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy todo để xóa!');
    }

    return { message: 'Xóa todo thành công' };
  }
}

export default new TodoService();
