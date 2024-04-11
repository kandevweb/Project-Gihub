import User from './User'
import Role from './Role'
import Image from './Image'
import Todo from './Todo'
import Categories from './Categories'
import Gender from './Gender'
import Post from './Post'
import Cast from './Cast'

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

// Post Relationships
const postRelationships = () => {
  Post.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  });
}
  // Cast Relationships
const castRelationships = () => {
  Cast.hasOne(Gender, {
    foreignKey: 'gender_id',
    as: 'gender_data'
  });

  Cast.hasOne(Image, {
    foreignKey: 'cast_id',
    as: 'avatar_data'
  });
}
// Gender Relationships
const genderRelationships = () => {
  Gender.belongsTo(Cast, {
    targetKey: 'cast_id',
    foreignKey: 'cast_id',
    as: 'cast_data'
  });
}

export const setupModelRelationships = () => {
  roleRelationships()
  userRelationships()
  todoRelationships()
  postRelationships()
  castRelationships()
  genderRelationships()
}

const models = { Role, User, Gender, Categories, Todo, Image, Post, Cast }

export default models
