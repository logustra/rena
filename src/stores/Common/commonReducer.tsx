import * as types from './commonTypes'
import { 
  CommonState,
  CommonAction
} from '@/contracts/commonContracts'

export const commonInitState = {
  isOffline: false
}

export function commonReducer (state: CommonState, action: CommonAction): any {
  const { type, response } = action

  switch(type) {
    case types.SET_OFFLINE:
      return {
        ...state,
        isOffline: response
      }
  }
}
