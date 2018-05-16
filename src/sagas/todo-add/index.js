import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { handleSubmit } from '../../store/todo-add/actions'
import { setTodo } from '../../store/todo-list/actions'
import { postTodo } from '../../api'

export default function * todoAddSaga() {
    yield fork(addTodoWatcher)
}

function * addTodoWatcher() {
    yield takeEvery(handleSubmit, addTodoWorker)
}

function * addTodoWorker({ payload: text }) {
    yield delay(2000)
    const todo = yield call(postTodo, {
        text,
        status: 'active',
    })
    yield put(setTodo(todo))
}