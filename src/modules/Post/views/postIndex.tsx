import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Post ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Post Index</Text>
      <Button
        title="Go to Blog"
        onPress={() => navigation.push('Blog')}
      />
    </View>
  )
}