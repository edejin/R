import {DATA_SUCCESS, ON_MESSAGE} from '../constants/ActionTypes'
const initialState = []

export default function (state = initialState, {type, value}) {
  switch (type) {
    case DATA_SUCCESS:
      return [
        ...value
      ]
    case ON_MESSAGE:
      return [
        ...state,
        value
      ]
    default:
      return state
  }
}