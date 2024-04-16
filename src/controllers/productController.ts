import { Response } from 'express'
import { Request } from 'express-validator/src/base'
import productService from '../services/productService'
import { sendResponseSuccess } from '../utils/response'

class productController {
  async fetchAllProducts(req: Request, res: Response) {
    const data = await productService.fetchAllProducts()

    sendResponseSuccess(res, data)
  }

  async addNewPost(req: Request, res: Response) {
    const product = req.body

    const data = await productService.addNewPost(product)

    sendResponseSuccess(res, data)
  }
}

export default new productController()
