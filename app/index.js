import React from 'react'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './client/reducers/state'
import App from './client/components/app'
import fetchAllTIckets from './client/actions/ticket_actions'


let store = createStore(rootReducer,
  applyMiddleware(
      thunkMiddleware,
      logger()
  )
)

store.dispatch(fetchAllTIckets())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
