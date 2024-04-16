import models from '../db/models'
import { ProductInput } from '../types/product.type'

class productService {
  // Danh sách sản phẩm
  async fetchAllProducts() {
    const products = await models.Product.findAll()

    return {
      message: 'Danh sách sản phẩm',
      data: {
        products
      }
    }
  }

  // Thêm sản phẩm
  async addNewPost(product: ProductInput) {
    const newProduct = await models.Product.create(product)

    return {
      message: 'Thêm sản phẩm thành công',
      data: {
        product: newProduct
      }
    }
  }
}

export default new productService()
