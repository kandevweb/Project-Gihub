import { DirectorAttributes } from '../db/models/Director'

export interface Director extends DirectorAttributes {}

export type DirectorInput = Omit<Director, 'directors_id' | 'createdAt' | 'updatedAt'>
//hihi