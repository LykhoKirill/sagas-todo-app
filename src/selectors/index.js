import { createSelector } from 'reselect'
import { prop, find, propEq } from 'ramda'

export const selectTodoList = state => state.todoList
export const createTodoListSelector = createSelector.bind(null, selectTodoList)

export const selectTodos = createTodoListSelector(prop('todos'))
export const selectTodoById = createSelector(
    [selectTodos, (_, id) => id],
    (todos, todoId) => find(propEq('id', todoId))(todos)
)