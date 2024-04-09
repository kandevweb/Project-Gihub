import models from '../db/models'
import { StatusCodes } from 'http-status-codes'
import { CustomErrorHandler } from '../utils/ErrorHandling'
import {  CastInput } from '../types/cast.type'
import   Cast, { CastAttributes } from '../db/models/Cast'




class castService {
  // Lấy danh sách Cast
  async getAllCasts() {
    const data: CastAttributes[] = await models.Cast.findAll();

    return {
      message: 'Lấy danh sách cast thành công.',
      data
    }
  }};

 async function addNewCast(data: CastAttributes) {
    const { full_name, gender_id, avatar_url, nationality, birth_day, biography } = data;

    const newCast = await Cast.create({
        full_name,
        gender_id,
        avatar_url,
        nationality,
        birth_day,
        biography
    });

    return { message: 'Thêm mới cast thành công', data: newCast };
}
// Sửa Cast
 async function updateCast(castId: string, data: CastAttributes) {
    const { full_name, gender_id, avatar_url, nationality, birth_day, biography } = data;

    const updatedCast = await Cast.update(
        { full_name, gender_id, avatar_url, nationality, birth_day, biography },
        { where: { cast_id: castId }, returning: true }
    );

    if (!updatedCast[0]) {
        throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy cast để cập nhật!');
    }

    return { message: 'Cập nhật cast thành công', data: updatedCast[1][0] };

// Xóa Cast
 async function deleteCast(castId: string) {
    const deletedRowCount = await Cast.destroy({ where: { cast_id: castId } });

    if (!deletedRowCount) {
        throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy cast để xóa!');
    }

    return { message: 'Xóa cast thành công' };
}
 }
 


export default new castService()
