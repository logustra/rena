import React from 'react'
import { tw } from 'react-native-tailwindcss'
import { rgba } from 'polished'

import { Props } from './ralert.typings'

import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

import { 
  colors,
  opacity
} from '@/styles'

export default function RAlert ({ children, style }: Props) {
  return (
    <View style={[styles.ralert, style]}>
      <Text style={[tw.textWhite]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ralert: {
    backgroundColor: rgba(colors.black, Number(opacity[50])),
    ...tw.absolute,
    ...tw.top0,
    ...tw.left0,
    ...tw.wFull,
    ...tw.z10,
    ...tw.p2,
    ...tw.justifyCenter,
    ...tw.itemsCenter
  }
})
