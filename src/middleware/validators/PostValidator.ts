import { body } from 'express-validator'

class PostValidator {
  checkAddNewPost() {
    return [
      body('content')
        .notEmpty()
        .withMessage('Nội dung bài viết không được trống!')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Độ dài bài viết tối thiểu 8 kí tự!')
    ]
  }
}

export default new PostValidator()
