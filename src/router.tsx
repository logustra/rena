import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import postRoutes from '@@/Post/router'

import { Loading } from 'atoms'

const routes = [
  ...postRoutes
]

const Stack = createStackNavigator()

export default function Router () {
  return (
    <React.Suspense fallback={<Loading />}>
      <Stack.Navigator 
        initialRouteName="post.index"
        headerMode="screen"
      >
        
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
