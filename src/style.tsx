import React from 'react'

import { Props } from '@/contracts/styleContracts'
import { 
  StylesContext as Styles,
  colors,
  sizes,
  typography
} from '@/styles'

export default function Style ({ children }: Props) {
  return (
    <Styles.Provider 
      value={{
        colors,
        sizes,
        typography
      }}
    >
      {children}
    </Styles.Provider>
  )
}
