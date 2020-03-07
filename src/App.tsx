import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'

import { Theme } from '@/contracts/stylesContracts'

import Routes from './router'

import {
  colors,
  typography
} from '@/styles'

const theme: Theme = {
  colors,
  typography
}

export default function App () {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>  
    </NavigationContainer>
  )
}
