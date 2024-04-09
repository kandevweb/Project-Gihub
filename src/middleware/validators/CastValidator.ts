import { body } from 'express-validator';

class CastValidator {
  checkAddCast() {
    return [
      body('full_name')
        .notEmpty()
        .withMessage('Họ và tên không được trống!')
        .trim(),
        
      body('gender_id')
        .notEmpty()
        .withMessage('ID giới tính không được trống!')
        .isString(),
       

      body('avatar_url')
        .optional({ nullable: true })
        .isString(),
        

      body('nationality')
        .optional({ nullable: true })
        .isString(),
        

      body('birth_day')
        .optional({ nullable: true })
        .isDate()
        .withMessage('Ngày sinh phải có định dạng ngày hợp lệ!'),

      body('biography')
        .optional({ nullable: true })
        .isString(),
        
    ];
  }
}

export default new CastValidator();
