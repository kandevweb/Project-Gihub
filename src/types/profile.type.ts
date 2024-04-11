import { ProfileAttributes } from '../db/models/Profile'

export interface Profile extends ProfileAttributes {}

export type ProfileInput = Omit<Profile, 'profile_id' | 'user_id' | 'createdAt' | 'updatedAt'>

export type ProfileUpdate = Omit<Profile, 'profile_id' | 'gender_id' | 'user_id' | 'createdAt' | 'updatedAt'>
