import { handleActions } from 'redux-actions'
import { append } from 'ramda'

import * as actions from './actions'

const initialState = {
    todos: [],
}

const reducer = handleActions({
    [actions.setTodos]: (state, action) => ({
        ...state, todos: action.payload
    }),
    [actions.setTodo]: (state, { payload: todo }) => ({
        ...state,
        todos: append(todo, state.todos)
    }),
    [actions.deleteTodo]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }),
    [actions.updateTodo]: (state, { payload: updatedTodo }) => ({
        ...state,
        todos: state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    })
}, initialState)

export default reducer