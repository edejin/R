import * as actionTypes from '../constants/ActionTypes'
import {sendNick} from '../actions'

const setNick = store => next => action => {

  switch (action.type) {
    case actionTypes.SET_NICK:
      sendNick(store.getState().settings.nickName, action.value)
      break;
  }
  next(action)
}

export default setNick