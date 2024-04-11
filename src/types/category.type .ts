import { CategoriesAttributes } from '../db/models/Category'

export interface Category extends CategoriesAttributes {}

export type CategoryInput = Omit<Category, 'category_id' | 'createdAt' | 'updatedAt'>
