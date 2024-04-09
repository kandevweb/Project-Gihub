import User from './User';
import Role from './Role';
import Todo from './Todo';

// Role Relationships
const roleRelationships = () => {
  Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'user_data'
  });
};

// User Relationships
const userRelationships = () => {
  User.belongsTo(Role, {
    targetKey: 'role_id',
    foreignKey: 'role_id',
    as: 'role_data'
  });
};

// Todo Relationships
const todoRelationships = () => {
  Todo.belongsTo(User, {
    targetKey: 'user_id', 
    foreignKey: 'user_id', 
    as: 'user_data' 
  });
};

// Cast Relationships


export const setupModelRelationships = () => {
  roleRelationships();
  userRelationships();
  todoRelationships();
  
};

const models = { Role, User, Todo };

export default models;
