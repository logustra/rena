import React from 'react'
import { Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import postRoutes from '@@/Post/router'
import Styled, { ThemeProvider } from 'styled-components/native'

import { Theme } from '@/contracts/stylesContracts'

import {
  colors,
  typography
} from '@/styles'

const theme: Theme = {
  colors,
  typography
}

const Stack = createStackNavigator()

const StyledBlog = Styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = Styled.Text`
  font-size: 25px;
  font-family: 'Lato-Bold';
`

function Blog ({ navigation }) {
  return (
    <StyledBlog theme={theme}>
      <StyledText theme={theme}>Blog</StyledText>
      <Button 
        title="Go to Home"
        onPress={() => navigation.push('post.index')}
      />
    </StyledBlog>
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
      <ThemeProvider theme={theme}>
        <Stack.Navigator initialRouteName="Blog">
          {routes.map((item: any, index: number) => (
            <Stack.Screen
              key={`route-${index}`}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
      </ThemeProvider>  
    </NavigationContainer>
  )
}
