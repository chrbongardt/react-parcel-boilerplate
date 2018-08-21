import React from 'react'
import Router from 'components/router/Router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'reducers/rootReducer'
import saga from 'sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(saga)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
