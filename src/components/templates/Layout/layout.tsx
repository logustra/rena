import React from 'react'
import Styled, { ThemeContext } from 'styled-components/native'

import { Props } from './layout.contracts'

export default function Layout ({ children, style }: Props) {
  const theme = React.useContext(ThemeContext)
  
  return (
    <StyledLayout 
      theme={theme}
      style={style}
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
