import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import message from './reducers/message'

import App from './containers/App'

const store = createStore(combineReducers({
  message
}))

document.addEventListener('DOMContentLoaded', event => (
  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'))
))
