import * as actionTypes from '../constants/ActionTypes'

const syncFav = store => next => action => {

  switch (action.type) {
    case actionTypes.ON_MESSAGE:
      sessionStorage.setItem('history', JSON.stringify(
        [
          ...store.getState().messages,
          action.value
        ]
      ))
      break;
  }
  next(action)
}

export default syncFav