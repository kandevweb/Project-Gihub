import { ImageAttributes } from '../db/models/Image'

export interface Image extends ImageAttributes {}

export type ImageInput = Omit<Image, 'image_id' | 'createdAt' | 'updatedAt'>
