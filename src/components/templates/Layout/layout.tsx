import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { tw } from 'react-native-tailwindcss'

import { Props } from './layout.contracts'

import {
  StoresContext,
  setRefreshing,
  setOffline
} from '@/stores'

import { wait } from '@/libs'

import { 
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StyleSheet
} from 'react-native'

import { Alert } from 'molecules'

export default function Layout ({ children, style, containerStyle }: Props) {
  const netInfo = useNetInfo()

  const { commonState, commonDispatch } = React.useContext<any>(StoresContext)

  function onRefresh () {
    setRefreshing(commonDispatch, true)

    wait(2000).then(() => setRefreshing(commonDispatch, false))
  }

  React.useEffect(() => {
    if (netInfo.details) {
      setOffline(commonDispatch, !netInfo.isConnected)
    }
  }, [netInfo, commonDispatch])

  return (
    <SafeAreaView style={[styles.layout, style]}>
      {commonState.isOffline ? (
        <Alert>
          {'You\'re Offline'}
        </Alert>
      ) : (
        null
      )}
      
      <ScrollView
        style={[styles.container, containerStyle]}
        refreshControl={
          <RefreshControl
            refreshing={commonState.isRefreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout: {
    ...tw.flex1,
    ...tw.bgGray100
  },
  
  container: {
    ...tw.p4
  }
})
