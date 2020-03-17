import { css } from 'styled-components/native'

import { 
  sizes,
  typography 
} from '../'

export const font = {
  size: {
    sm: css`
      font-size: ${sizes.sm}
    `,

    base: css`
      font-size: ${sizes.base}
    `,

    xl: css`
      font-size: ${sizes.xl}
    `
  },

  family: {
    lato: {
      regular: css`
        font-family: ${typography.lato.regular}
      `,

      bold: css`
        font-family: ${typography.lato.bold}
      `
    }
  }
}
