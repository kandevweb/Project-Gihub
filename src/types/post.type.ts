import { PostAttributes } from '../db/models/Post'

export interface Post extends PostAttributes {}

export type PostInput = Pick<Post, 'content' | 'image_id' | 'user_id'>

export type PostUpdate = Pick<Post, 'content' | 'image_id'>
