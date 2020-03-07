import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { RoutesModel } from '@/contracts/routerContracts'

import postRoutes from '@@/Post/router'

const Stack = createStackNavigator()

const routes = [
  ...postRoutes
]

export default function Router () {
  return (
    <React.Suspense fallback={<View />}>
      <Stack.Navigator initialRouteName="post.index">
        {routes.map((item: RoutesModel, index: number) => (
          <Stack.Screen
            key={`route-${index}`}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </React.Suspense>
  )
}
