import React from 'react'

import commonInitState from './commonState'
import commonMutations from './commonMutations'
import {
  setRefreshing,
  setOffline
} from './commonActions'

const commonContext = React.createContext({})

export {
  commonContext,
  commonInitState,
  commonMutations,
  setRefreshing,
  setOffline
}
