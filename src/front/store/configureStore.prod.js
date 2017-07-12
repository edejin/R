import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postMessage from '../middleware/postMessage'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, postMessage)
)

export default configureStore