import * as actionTypes from '../constants/ActionTypes'
import * as postMessagesTypes from '../constants/PostMessageTypes'

export const resetErrorMessage = () => ({
  type: actionTypes.RESET_ERROR_MESSAGE
})

export const loadInitData = (requiredFields = []) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.DATA_SUCCESS,
      value: JSON.parse(sessionStorage.getItem('history') || '[]')
    })
  } catch (e) {
    dispatch({
      type: actionTypes.DATA_ERROR,
      error: e.message
    })
  }
}

export const newMessage = (value) => ({
  type: actionTypes.ON_MESSAGE,
  value
})

export const setNick = (oldNick, newNick) => ({
  type: actionTypes.SET_NICK,
  oldNick,
  newNick
})

export const sendNewMessageBrootcast = (data) => Array.prototype.slice.call(document.getElementsByTagName('iframe'), 0).map(({contentWindow}) =>
  contentWindow.postMessage(JSON.stringify({
    type: postMessagesTypes.NEW_MESSAGE,
    data
  }), '*')
)


export const updateNicksBrootcast = data => Array.prototype.slice.call(document.getElementsByTagName('iframe'), 0).map(({contentWindow}) =>
  contentWindow.postMessage(JSON.stringify({
    type: postMessagesTypes.SET_NICKS,
    data
  }), '*')
)