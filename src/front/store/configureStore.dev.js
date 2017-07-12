import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

import postMessage from '../middleware/postMessage'

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, postMessage, createLogger()),
      DevTools.instrument()
    )
  )
}

export default configureStore