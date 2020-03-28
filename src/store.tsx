import React from 'react'

import {
  commonInitState,
  commonReducer
} from '@/stores'

export const Stores = React.createContext(null)

export default function Store ({ children }: any) {
  const [commonState, commonDispatch] = React.useReducer(commonReducer, commonInitState)

  return (
    <Stores.Provider value={{ commonState, commonDispatch }}>
      {children}
    </Stores.Provider>
  )
}
