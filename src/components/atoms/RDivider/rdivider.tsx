import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { 
  View,
  StyleSheet
} from 'react-native'

export default function RDivider () {
  return (
    <View style={[styles.rdivider]} />
  )
}

const styles = StyleSheet.create({
  rdivider: {
    ...tw.borderBlack,
    ...tw.borderB,
    ...tw.mY2
  }
})
