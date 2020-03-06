import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function Home ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button 
        title="Go to Blog"
        onPress={() => navigation.navigate('Blog')}
      />
    </View>
  )
}

function Blog ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Blog</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const routes = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Blog',
    component: Blog
  }
]

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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