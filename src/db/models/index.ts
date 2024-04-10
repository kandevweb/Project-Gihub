import User from './User'
import Role from './Role'
import Image from './Image'
import Todo from './Todo'
import Categories from './Categories'
import Directors from './Director'
import Gender from './Gender'
import Post from './Post'

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
}

// Todo Relationships
const todoRelationships = () => {
  Todo.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  })
}
// Directors Relationships
const directorsRelationships = () => {
  Directors.belongsTo(Gender, {
    targetKey: 'gender_id',
    foreignKey: 'gender_id',
    as: 'gender_data'
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

export const setupModelRelationships = () => {
  roleRelationships()
  userRelationships()
  todoRelationships()
  postRelationships()
  directorsRelationships()
}

const models = { Role, User, Gender, Categories, Directors, Todo, Image, Post }

export default models
