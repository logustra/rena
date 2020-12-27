import logger from 'use-reducer-logger'

import * as types from './commonTypes'
import {
  CommonState,
  CommonAction
} from '@/typings/commonTypings'

function commonMutations (state: CommonState, action: CommonAction): any {
  const { type, response } = action

  switch (type) {
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

export default __DEV__ ? logger<any>(commonMutations) : commonMutations
