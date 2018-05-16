import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { getTodos as getTodosAction, setTodos } from '../../store/todo-list/actions'
import { getTodos } from '../../api'

export default function * todoListSaga() {
    yield fork(getTodosWatcher)
}

function * getTodosWatcher() {
    yield takeEvery(getTodosAction, getTodosWorker)
}

function * getTodosWorker() {
    const todos = yield call(getTodos)
    yield put(setTodos(todos))
}