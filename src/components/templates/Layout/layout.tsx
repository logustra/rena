import React from 'react'
import { RefreshControl } from 'react-native'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './layout.contracts'

import { wait } from '@/libs'

export default function Layout ({ children, style }: Props) {
  const theme = React.useContext(ThemeContext)
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])
  
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
