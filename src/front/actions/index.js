import * as actionTypes from '../constants/ActionTypes'
import * as postMessageTypes from '../../back/constants/PostMessageTypes'

export const resetErrorMessage = () => ({
  type: actionTypes.RESET_ERROR_MESSAGE
})

export const loadInitData = (requiredFields = []) => (dispatch) => {
  parent.postMessage(JSON.stringify({
    type: postMessageTypes.LOADED
  }), '*')
}

export const sendMessage = ({nick, time, message}) => parent.postMessage(JSON.stringify({
  nick,
  time,
  message,
  type: postMessageTypes.MESSAGE
}), '*')

export const updateNick = value => ({
  type: actionTypes.SET_NICK,
  value
})

export const dataSuccess = value => ({
  type: actionTypes.DATA_SUCCESS,
  value
})

export const sendNick = (oldNick, newNick) => parent.postMessage(JSON.stringify({
  oldNick,
  newNick,
  type: postMessageTypes.NICK
}), '*')

export const newMessage = value => ({
  type: actionTypes.ON_MESSAGE,
  value
})

export const setNicks = value => ({
  type: actionTypes.SET_NICKS,
  value
})