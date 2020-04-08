import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { Props } from './rcontainer.contracts'

import {
  StoresContext,
  setRefreshing
} from '@/stores'

import { wait } from '@/libs'

import {
  ScrollView,
  RefreshControl,
  StyleSheet
} from 'react-native'

export default function RContainer ({ children, style }: Props) {
  const { commonState, commonDispatch } = React.useContext<any>(StoresContext)
  
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
