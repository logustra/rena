import { Theme } from '@/contracts/stylesContracts'

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
