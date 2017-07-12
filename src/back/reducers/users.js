import {SET_NICK} from '../constants/ActionTypes'
const initialState = []

export default function (state = initialState, {type, oldNick, newNick}) {
  switch (type) {
    case SET_NICK:
      let newState = [
        ...state
      ]
      let index = newState.indexOf(oldNick);
      if (index > -1) {
        newState[index] = newNick
      } else {
        newState.push(newNick)
      }
      return newState
    default:
      return state
  }
}