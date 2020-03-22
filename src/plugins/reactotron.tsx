
import Reactotron, {
  networking, 
  trackGlobalErrors,
  openInEditor
} from 'reactotron-react-native'

if (__DEV__) {
  Reactotron
    .configure({ name: 'Rena' })
    .use(networking())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()
}
