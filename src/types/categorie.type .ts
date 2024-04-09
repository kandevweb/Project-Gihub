import { CategoriesAttributes } from '../db/models/Categorie'

export interface Category extends CategoriesAttributes {}

export type CategoryInput = Omit<Category, 'category_id' | 'createdAt' | 'updatedAt'>
