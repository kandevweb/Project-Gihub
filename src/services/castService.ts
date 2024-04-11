import models from '../db/models';
import { StatusCodes } from 'http-status-codes';
import { CustomErrorHandler } from '../utils/ErrorHandling';
import { CastInput } from '../types/cast.type';

class castService {
  // Lấy danh sách Cast
  async getAllCasts() {
    const data: CastInput[] = await models.Cast.findAll();
    return {
      message: 'Lấy danh sách cast thành công.',
      data
    };
  }
  // Thêm mới Cast
  async addNewCast(data: CastInput) {
    const newCast = await models.Cast.create(data)
    return { message: 'Thêm mới cast thành công', data: newCast };
  }
  // Sửa Cast
  async updateCast(cast_id: string, data: CastInput) {
    const cast = await models.Cast.findByPk(cast_id)

    if (!cast) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Cast không tồn tại.')
    }
    
    await cast.update(data)

    return {
      message: 'Cập nhật Cast thành công.',
      data: cast
    }
  }
  // Xóa Cast
  async deleteCast(cast_id: string) {
    const cast = await models.Cast.findByPk(cast_id)
    if (!cast) throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Cast không tồn tại!')
    await cast.destroy()
    return {
      message: 'Xóa thành công!',
      data: {
        cast
      }
    }
  }
  // Chi tiết Cast
  async castDetail(cast_id: string) {
    const castDetail = await models.Cast.findByPk(cast_id)
    if (!castDetail) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy cast!')
    }
    return {
      message: 'Chi tiết cast.',
      data: {
        cast: castDetail
      }
    }
  }
}

export default new castService();
