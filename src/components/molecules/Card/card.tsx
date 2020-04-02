import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { Props } from './card.contracts'

import { 
  View,
  StyleSheet
} from 'react-native'

export default function Card ({ children, style }: Props) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    ...tw.bgWhite,
    ...tw.p4,
    ...tw.rounded
  }
})
