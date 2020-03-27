import * as types from './commonTypes'

export function setRefreshing (dispatch: Function, response: boolean) {
  dispatch({
    type: types.SET_REFRESHING,
    response
  })
}

export function setOffline (dispatch: Function, response: boolean) {
  dispatch({
    type: types.SET_OFFLINE,
    response
  })
}
