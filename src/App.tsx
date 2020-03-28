import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'

import { Theme } from '@/contracts/stylesContracts'

import Store from './store'
import Routes from './router'

import {
  colors,
  sizes,
  typography
} from '@/styles'

const theme: Theme = {
  colors,
  sizes,
  typography
}

export default function App () {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Store>
  )
}
