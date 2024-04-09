
import { CastAttributes } from './../db/models/Cast';

export interface Cast extends CastAttributes {}

export type CastInput = Omit<Cast, 'cast_id' | '' | 'updatedAt'>
