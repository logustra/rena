import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rlayout.typings'

import { setOffline } from '@/stores/Common'

import { useCommonStore } from '@/utils'

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function RLayout ({ children, style }: Props) {
  const netInfo = useNetInfo()

  const {
    commonState,
    commonDispatch
  } = useCommonStore()

  React.useEffect(() => {
    if (netInfo.details) setOffline(commonDispatch, !netInfo.isConnected)
  }, [netInfo, commonDispatch])

  return (
    <SafeAreaView style={[styles.rlayout, style]}>
      {commonState.isOffline && (
        <View style={[styles.offline]}>
          <Text
            style={[
              tw.textWhite,
              tw.textCenter
            ]}
          >
            {'You\'re Offline'}
          </Text>
        </View>
      )}

      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rlayout: {
    ...tw.flex1,
    ...tw.bgGray100
  },

  offline: {
    ...tw.absolute,
    ...tw.bgRed500,
    ...tw.p1,
    ...tw.wFull,
    ...tw.left0,
    ...tw.z20
  }
})
