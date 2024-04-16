import { ProductAttributes } from '../db/models/Product'

export interface Product extends ProductAttributes {}

export type ProductInput = Omit<Product, 'product_id' | 'createdAt' | 'updatedAt'>
export type ProductInput2 = Pick<Product, 'product_name' | 'price' | 'user_id'>
