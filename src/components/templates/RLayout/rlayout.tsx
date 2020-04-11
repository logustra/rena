import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rlayout.typings'

import {
  StoresContext,
  setOffline
} from '@/stores'

import { 
  SafeAreaView,
  StyleSheet
} from 'react-native'

import { RAlert } from 'molecules'

export default function RLayout ({ children, style }: Props) {
  const netInfo = useNetInfo()

  const { commonState, commonDispatch } = React.useContext<any>(StoresContext)

  React.useEffect(() => {
    if (netInfo.details) {
      setOffline(commonDispatch, !netInfo.isConnected)
    }
  }, [netInfo, commonDispatch])

  return (
    <SafeAreaView style={[styles.rlayout, style]}>
      {commonState.isOffline ? (
        <RAlert>
          {'You\'re Offline'}
        </RAlert>
      ) : (
        null
      )}

      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rlayout: {
    ...tw.flex1,
    ...tw.bgGray100
  }
})
