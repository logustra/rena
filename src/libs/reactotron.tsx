
import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  Reactotron
    .configure({ name: 'Rena' })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // eslint-disable-next-line
  console.tron = Reactotron
}
