import { fork } from 'redux-saga/effects'

import todoAddSaga from './todo-add'
import todoListSaga from './todo-list'
import todoSaga from './todo'

export default function * rootSaga() {
    yield fork(todoAddSaga)
    yield fork(todoListSaga)
    yield fork(todoSaga)
}