import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'

export default function Post () {
  const navigation = useNavigation()

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
