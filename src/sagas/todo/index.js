import { fork, takeEvery, call, put, select } from 'redux-saga/effects'

import { handleDelete, handleToggle } from './actions'
import { deleteTodo, updateTodo } from '../../store/todo-list/actions'
import { deleteTodo as deleteTodoApi, updateTodo as updateTodoApi } from '../../api'
import { selectTodoById } from '../../selectors'

export default function * todoSaga() {
    yield fork(todoDeleteWatcher)
    yield fork(todoToggleWatcher)
}

function * todoDeleteWatcher() {
    yield takeEvery(handleDelete, todoDeleteWorker)
}

function * todoDeleteWorker({ payload: id }) {
    yield call(deleteTodoApi, id)
    yield put(deleteTodo(id))
}

function * todoToggleWatcher() {
    yield takeEvery(handleToggle, todoToggleWorker)
}

function * todoToggleWorker({ payload: id }) {
    let todo = yield select(selectTodoById, id) 
    todo = toggleStatus(todo)
    todo = yield call(updateTodoApi, todo)
    yield put(updateTodo(todo))
}

const toggleStatus = (todo) => ({
    ...todo,
    status: todo.status === 'active' ? 'complete' : 'active'
})