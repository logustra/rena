import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'

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
  RefreshControl 
} from 'react-native'

import { Alert } from 'molecules'

export default function Layout ({ children, style }: Props) {
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
    <SafeAreaView style={style}>
      {commonState.isOffline ? (
        <Alert>
          {'You\'re Offline'}
        </Alert>
      ) : (
        null
      )}
      
      <ScrollView
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

// const StyledLayout = Styled.SafeAreaView`
//   flex: 1;
//   background-color: ${props => props.theme.colors.gray};
// `

// const StyledLayoutContainer = Styled.ScrollView`
//   padding: ${props => props.theme.sizes.base};
// `
