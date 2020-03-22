import { css } from 'styled-components/native'

import { sizes } from '../base/sizes'

export const margin = {
  top: {
    3: css`
      margin-top: ${sizes.xs}
    ` 
  },

  bottom: {
    4: css`
      margin-bottom: ${sizes.base}
    ` 
  }
}
