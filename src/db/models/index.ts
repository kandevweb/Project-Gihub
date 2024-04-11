import User from './User'
import Role from './Role'
import Image from './Image'
import Todo from './Todo'
import Categories from './Categories'
import Gender from './Gender'
import Post from './Post'
import Profile from './Profile'
import { profile } from 'console'

// Role Relationships
const roleRelationships = () => {
  Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'user_data'
  })
}

// User Relationships
const userRelationships = () => {
  User.belongsTo(Role, {
    targetKey: 'role_id',
    foreignKey: 'role_id',
    as: 'role_data'
  })

  User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'post_data'
  })

  User.hasOne(Profile, {
    foreignKey: 'user_id',
    as: 'profile_data'
  })
}

// Todo Relationships
const todoRelationships = () => {
  Todo.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  })
}

// Post Relationships
const postRelationships = () => {
  Post.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  })
}

// Profile Relationships
const profileRelationships = () => {
  Profile.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  })

  Profile.belongsTo(Image, {
    targetKey: 'image_id',
    foreignKey: 'profile_picture',
    as: 'image_data_profile_picture'
  })

  Profile.belongsTo(Image, {
    targetKey: 'image_id',
    foreignKey: 'cover_photo',
    as: 'image_data_cover_photo'
  })
}
// Image Relationships
const imageRelationships = () => {
  Image.hasMany(Profile, {
    foreignKey: 'profile_picture',
    as: 'profile_data_profile_picture'
  })

  Image.hasMany(Profile, {
    foreignKey: 'cover_photo',
    as: 'profile_data_cover_photo'
  })
}

export const setupModelRelationships = () => {
  roleRelationships()
  userRelationships()
  todoRelationships()
  postRelationships()
  profileRelationships()
  imageRelationships()
}

const models = { Role, User, Gender, Categories, Todo, Image, Post, Profile }

export default models
