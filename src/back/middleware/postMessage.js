import * as actionTypes from '../constants/ActionTypes'
import users from '../reducers/users'
import {sendNewMessageBrootcast, updateNicksBrootcast} from '../actions'

const postNewMessage = store => next => action => {

  switch (action.type) {
    case actionTypes.ON_MESSAGE:
      sendNewMessageBrootcast(action.value)
      break;
    case actionTypes.SET_NICK:
      updateNicksBrootcast(users(store.getState().users, action))
      break;
  }
  next(action)
}

export default postNewMessage