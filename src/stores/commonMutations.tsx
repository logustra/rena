import * as types from './commonTypes'
import { 
  CommonState,
  CommonAction
} from '@/contracts/commonContracts'

export default (state: CommonState, action: CommonAction): any => {
  const { type, response } = action

  switch(type) {
    case types.SET_REFRESHING:
      return {
        ...state,
        isRefreshing: response
      }

    case types.SET_OFFLINE:
      return {
        ...state,
        isOffline: response
      }
  }
}
