import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import postRoutes from '@@/Post/router'

import { RLoading } from 'atoms'

const routes = [
  ...postRoutes
]

const Stack = createStackNavigator()

export default function Router () {
  return (
    <React.Suspense fallback={<RLoading />}>
      <Stack.Navigator>
        {routes.map((item: any, index: number) => (
          <Stack.Screen
            key={`route-${index}`}
            {...item}
          />
        ))}
      </Stack.Navigator>
    </React.Suspense>
  )
}
