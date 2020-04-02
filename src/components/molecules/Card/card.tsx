import React from 'react'

import { Props } from './card.contracts'

import { View } from 'react-native'

export default function Card ({ children, style }: Props) {
  return (
    <View style={style}>
      {children}
    </View>
  )
}

// const StyledCard = Styled.View`
//   background-color: ${props => props.theme.colors.white};
//   padding: ${props => props.theme.sizes.base};
//   border-radius: 6px;
// `
