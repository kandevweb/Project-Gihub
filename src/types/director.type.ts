import { DirectorsAttributes } from '../db/models/Director'

export interface Directors extends DirectorsAttributes {}

export type DirectorsInput = Omit<Directors, 'directors_id' | 'createdAt' | 'updatedAt'>
//hihi
