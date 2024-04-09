import { body } from 'express-validator';

class TodoValidator {
  checkAddTodo() {
    return [
      body('todo_name')
        .notEmpty()
        .withMessage('Tên todo không được trống!')
        .trim(),
        
      body('description')
      .notEmpty()
      .withMessage('Thông tin không được trống!')
      .trim(),

      body('completed')
        .optional({ nullable: true })
        .isBoolean()
        .withMessage('Trạng thái hoàn thành phải là một boolean!'),

      body('user_id')
        .optional({ nullable: true })
        .isString(),
        
    ];
  }
}

export default new TodoValidator();
