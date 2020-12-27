import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rcard.typings'

import {
  View,
  StyleSheet
} from 'react-native'

export default function RCard ({ children, style }: Props) {
  return (
    <View style={[styles.rcard, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  rcard: {
    ...tw.bgWhite,
    ...tw.p4,
    ...tw.rounded
  }
})
