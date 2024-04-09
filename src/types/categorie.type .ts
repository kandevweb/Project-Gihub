import { CategoriesAttributes } from '../db/models/Categorie'

export interface Categories extends CategoriesAttributes {}

export type CategoriesInput = Omit<Categories, 'category_id' | 'createdAt' | 'updatedAt'>
