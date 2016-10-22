import React from 'react'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './client/reducers/state'
import App from './client/components/app'
import { fetchAllTickets } from './client/actions/ticket_actions'

const loggerMiddleware = createLogger()

let store = createStore(rootReducer,
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
  )
)

store.dispatch(fetchAllTickets())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
