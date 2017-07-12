import {SET_NICK} from '../constants/ActionTypes'
const initialState = {
  nickName: ''
}

export default function (state = initialState, {type, value}) {
  switch (type) {
    case SET_NICK:
      return {
        ...state,
        nickName: value
      }
    default:
      return state
  }
}