import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rexample.typings'

import { 
  View,
  StyleSheet
} from 'react-native'

export default function RExample ({ children, style }: Props) {
  return (
    <View style={[styles.rexample, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  rexample: {
    ...tw.flex1
  }
})
