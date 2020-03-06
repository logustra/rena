import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import postRoutes from '@@/Post/router'

const Stack = createStackNavigator()

function Blog ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Blog</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.push('post.index')}
      />
    </View>
  )
}

const routes = [
  ...postRoutes,

  {
    name: 'Blog',
    component: Blog
  }
]

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog">
        {routes.map((item: any, index: number) => (
          <Stack.Screen 
            key={`route-${index}`}
            name={item.name} 
            component={item.component} 
          />
        ))}        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
