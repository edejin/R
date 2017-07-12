import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postMessage from '../middleware/postMessage'
import sessionStorage from '../middleware/sessionStorage'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, sessionStorage, postMessage)
)

export default configureStore