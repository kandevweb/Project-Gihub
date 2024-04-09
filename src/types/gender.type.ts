import { GenderAttributes } from '../db/models/Gender'

export interface Gender extends GenderAttributes {}

export type GenderInput = Omit<Gender, 'gender_id' | 'createdAt' | 'updatedAt'>
