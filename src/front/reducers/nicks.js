import {SET_NICKS} from '../constants/ActionTypes'
const initialState = []

export default function (state = initialState, {type, value}) {
  switch (type) {
    case SET_NICKS:
      return [
        ...value
      ]
    default:
      return state
  }
}