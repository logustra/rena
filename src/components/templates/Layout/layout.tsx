import React from 'react'
import { RefreshControl } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './layout.contracts'

import {
  setOffline,
  commonInitState,
  commonReducer
} from '@/stores/Common'

import { wait } from '@/libs'

import { Alert } from 'molecules'

export default function Layout ({ children, style }: Props) {
  const netInfo = useNetInfo()
  const theme = React.useContext(ThemeContext)

  const [commonState, commonDispatch] = React.useReducer(commonReducer, commonInitState)

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])

  React.useEffect(() => {
    if (netInfo.details) {
      setOffline(commonDispatch, !netInfo.isConnected)
    }
  }, [netInfo])

  return (
    <StyledLayout 
      theme={theme}
      style={style}
    >
      {commonState.isOffline ? (
        <Alert>
          {'You\'re Offline'}
        </Alert>
      ) : (
        null
      )}
      
      <StyledLayoutContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {children}
      </StyledLayoutContainer>
    </StyledLayout>
  )
}

const StyledLayout = Styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};
`

const StyledLayoutContainer = Styled.ScrollView`
  padding: ${props => props.theme.sizes.base};
`
