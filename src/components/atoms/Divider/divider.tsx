import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { 
  View,
  StyleSheet
} from 'react-native'

export default function Divider () {
  return (
    <View style={[styles.divider]} />
  )
}

const styles = StyleSheet.create({
  divider: {
    ...tw.borderBlack,
    ...tw.borderB,
    ...tw.mY2
  }
})
