import React from 'react'
import { View } from 'react-native'
import { 
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'

import { RoutesModel } from '@/contracts/routerContracts'

import postRoutes from '@@/Post/router'

const routes = [
  ...postRoutes,

  {
    name: 'offline',
    component: React.lazy(() => import('./views/offline')),
    options: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  }
]

const Stack = createStackNavigator()

export default function Router () {
  return (
    <React.Suspense fallback={<View />}>
      <Stack.Navigator 
        initialRouteName="post.index"
        headerMode="screen"
      >
        {routes.map((item: RoutesModel, index: number) => (
          <Stack.Screen
            key={`route-${index}`}
            {...item}
          />
        ))}
      </Stack.Navigator>
    </React.Suspense>
  )
}
