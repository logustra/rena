import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rcontainer.typings'

import { setRefreshing } from '@/stores/Common'

import {
  wait,
  useCommonStore
} from '@/utils'

import {
  ScrollView,
  RefreshControl,
  StyleSheet
} from 'react-native'

export default function RContainer ({ children, style }: Props) {
  const {
    commonState,
    commonDispatch
  } = useCommonStore()

  function onRefresh () {
    setRefreshing(commonDispatch, true)

    wait(2000).then(() => setRefreshing(commonDispatch, false))
  }

  return (
    <ScrollView
      style={[styles.container, style]}
      refreshControl={
        <RefreshControl
          refreshing={commonState.isRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...tw.flex1,
    ...tw.p4
  }
})
