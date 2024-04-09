
import { TodoAttributes } from './../db/models/Todo';

export interface Todo extends TodoAttributes {}

export type TodoInput = Omit<Todo, 'todo_id' |'user_id'| 'createdAt' | 'updatedAt'>

