import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Style from './style'
import Store from './store'
import Routes from './router'

export default function App () {
  return (
    <Style>
      <Store>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Store>
    </Style>
  )
}
