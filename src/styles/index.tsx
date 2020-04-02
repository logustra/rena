import React from 'react'

// base
import colors from './base/colors'
import sizes from './base/sizes'
import typography from './base/typography'

const StylesContext = React.createContext({})

export { 
  StylesContext,
  colors,
  sizes,
  typography
}
