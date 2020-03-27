import React from 'react'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './card.contracts'

export default function Card ({ children, style }: Props) {
  const theme = React.useContext(ThemeContext)

  return (
    <StyledCard
      theme={theme}
      style={style}
    >
      {children}
    </StyledCard>
  )
}

const StyledCard = Styled.View`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.sizes.base};
  border-radius: 6px;
`
