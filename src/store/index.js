import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root/reducer'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = composeWithDevTools(
    applyMiddleware(
        sagaMiddleware
    )
)

const store = createStore(
    rootReducer,
    middlewares,
)

sagaMiddleware.run(rootSaga)

export default store