import * as types from './commonTypes'

export function setOffline (dispatch: Function, response: boolean) {
  dispatch({
    type: types.SET_OFFLINE,
    response
  })
}
