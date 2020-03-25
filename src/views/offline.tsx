import React from 'react'
import { Text } from 'react-native'
import Styled from 'styled-components/native'

export default function Offline () {
  return (
    <StyledOffline>
      <Text>{'You\'re Offline'}</Text>
    </StyledOffline>
  )
}

const StyledOffline = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
