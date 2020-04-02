import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Store from './store'
import Routes from './router'

export default function App () {
  return (
    <Store>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Store>
  )
}
