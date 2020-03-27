import React from 'react'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './alert.contracts'

export default function Alert ({ children, style }: Props) {
  const theme = React.useContext(ThemeContext)

  return (
    <StyledAlert
      theme={theme}
      style={style}
    >
      <StyledAlertText>
        {children}
      </StyledAlertText>
    </StyledAlert>
  )
}

const StyledAlert = Styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

const StyledAlertText = Styled.Text`
  color: ${props => props.theme.colors.white};
`
