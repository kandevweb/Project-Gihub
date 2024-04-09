import User from './User'
import Role from './Role'
import Todo from './Todo'
import Categories from './Categorie'
import Gender from './Gender'

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
}

// Todo Relationships
const todoRelationships = () => {
  Todo.belongsTo(User, {
    targetKey: 'user_id',
    foreignKey: 'user_id',
    as: 'user_data'
  })
}

export const setupModelRelationships = () => {
  roleRelationships()
  userRelationships()
  todoRelationships()
}

const models = { Role, User, Gender, Categories, Todo }

export default models
