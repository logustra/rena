
import Reactotron, {
  asyncStorage, 
  networking, 
  trackGlobalErrors,
  openInEditor
} from 'reactotron-react-native'

if (__DEV__) {
  Reactotron
    .configure({ name: 'Rena' })
    .use(asyncStorage())
    .use(networking())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
