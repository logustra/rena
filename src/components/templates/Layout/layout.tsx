import React from 'react'
import { RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNetInfo } from '@react-native-community/netinfo'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './layout.contracts'

import { wait } from '@/libs'

export default function Layout ({ children, style }: Props) {
  const navigation = useNavigation()
  const netInfo = useNetInfo()
  const theme = React.useContext(ThemeContext)

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])

  React.useEffect(() => {
    if (netInfo.details) {
      if (!netInfo.isConnected) {
        navigation.navigate('offline')
      } else {
        navigation.navigate('post.index')
      }
    }
  }, [netInfo]) // eslint-disable-line

  return (
    <StyledLayout 
      theme={theme}
      style={style}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
        />
      }
    >
      { children }
    </StyledLayout>
  )
}

const StyledLayout = Styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};
  padding: ${props => props.theme.sizes.base};
`
