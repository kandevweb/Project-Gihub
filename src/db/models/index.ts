import User from './User'
import Role from './Role'
import Image from './Image'
import Todo from './Todo'
import Category from './Category'
import Director from './Director'
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
/// Directors Relationshipss
const directorsRelationships = () => {
  Director.belongsTo(Gender, {
    targetKey: 'gender_id',
    foreignKey: 'gender_id',
    as: 'gender_data'
  })
}
/// Gender Relationshipss
const genderRelationships = () => {
  Gender.hasMany(Director, {
    foreignKey: 'gender_id',
    as: 'director_data'
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
  genderRelationships()
}

const models = { Role, User, Gender, Category, Director, Todo, Image, Post }

export default models
