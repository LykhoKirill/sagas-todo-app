import { createAction } from 'redux-actions'

export const getTodos = createAction('getTodos')
export const setTodos = createAction('setTodos')
export const setTodo = createAction('setTodo')
export const deleteTodo = createAction('deleteTodo')
export const updateTodo = createAction('updateTodo')