import { body } from 'express-validator';

class CastValidator {
  checkAddCast() {
    return [
      body('full_name')
        .notEmpty()
        .withMessage('Họ và tên không được trống!')
        .trim(),
        
      body('gender_id')
      .optional({ nullable: true })
      .isString(),
       

      body('avatar_url')
      .optional({ nullable: true })
      .isString(),
        

      body('nationality')
      .notEmpty()
      .withMessage('Quốc tịch không được để trống!')
      .isString(),
        

      body('birth_day')
        .optional({ nullable: true })
        .isDate()
        .withMessage('Ngày sinh phải có định dạng ngày hợp lệ!'),

      body('biography')
      .notEmpty()
      .withMessage('Tiểu sử không được để trống!')
      .isString(),
        
    ];
  }
}

export default new CastValidator();
