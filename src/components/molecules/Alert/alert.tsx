import React from 'react'

import { Props } from './alert.contracts'

import { 
  View,
  Text
} from 'react-native'

export default function Alert ({ children, style }: Props) {
  return (
    <View style={style}>
      <Text>
        {children}
      </Text>
    </View>
  )
}

// const StyledAlert = Styled.View`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 2;
//   padding: 8px;
//   background-color: rgba(0, 0, 0, 0.5);
//   justify-content: center;
//   align-items: center;
// `

// const StyledAlertText = Styled.Text`
//   color: ${props => props.theme.colors.white};
// `
