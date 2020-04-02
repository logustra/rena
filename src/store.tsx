import React from 'react'

import { Props } from '@/contracts/storeContracts'
import {
  commonInitState,
  commonMutations
} from '@/stores'

export const Stores = React.createContext({})

export default function Store ({ children }: Props) {
  const [commonState, commonDispatch] = React.useReducer(commonMutations, commonInitState)

  return (
    <Stores.Provider value={{ commonState, commonDispatch }}>
      {children}
    </Stores.Provider>
  )
}
