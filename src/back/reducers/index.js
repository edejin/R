import * as ActionTypes from '../constants/ActionTypes'
import {combineReducers} from 'redux'

import messages from './messages'
import users from './users'

const errorMessage = (state = null, {type, error}) => {

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const rootReducer = combineReducers({
  errorMessage,
  messages,
  users
})

export default rootReducer