import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

import Store from './store'
import Routes from './router'

export default function App () {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Store>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Store>
  )
}
