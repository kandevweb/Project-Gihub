import { Request, Response } from 'express';
import castService from '../services/castService';
import { sendResponseSuccess } from '../utils/response';
import { CastInput } from '../types/cast.type';


class castController {
  // Lấy danh sách cast
  async getAllCasts(req: Request, res: Response) {
      const data = await castService.getAllCasts();
      sendResponseSuccess(res, data);
    
  }

  // Thêm mới cast
  async addNewCast(req: Request, res: Response) {
      const castData = req.body;
      const data = await castService.addNewCast(castData);
      sendResponseSuccess(res, data);
   
  }

  // Sửa thông tin cast
  async updateCast(req: Request, res: Response) {
    const { castId } = req.params
    const castData: CastInput = req.body
    const data = await castService.updateCast(castId, castData)
    sendResponseSuccess(res, data)
  }

  // Xóa cast
  async deleteCast(req: Request, res: Response) {
    const { castId } = req.params
    const data = await castService.deleteCast(castId)
    sendResponseSuccess(res, data)
  }

  // Chi tiết Cast
  async castDetail(req: Request, res: Response) {
    const { castId } = req.params
    const data = await castService.castDetail(castId)
    sendResponseSuccess(res, data)
  }
}

export default new castController();
