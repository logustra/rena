import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { 
  exampleInitState,
  exampleMutations,
  exampleRequest
} from '../stores'

import { 
  Text,
  StyleSheet
} from 'react-native'

import {
  RContainer,
  RLayout
} from 'templates'

import { typography } from '@/styles'

export default function ExampleIndex () {
  const [
    exampleState, 
    exampleDispatch
  ] = React.useReducer(
    exampleMutations, 
    exampleInitState
  )

  React.useEffect(() => {
    exampleRequest(exampleDispatch)
  }, [])

  return (
    <RLayout>
      <RContainer 
        style={[
          tw.justifyCenter, 
          tw.itemsCenter
        ]}
      >
        <Text style={[styles.title]}>
          Bismillah, Hello World!
        </Text>
      </RContainer>
    </RLayout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.lato.regular,
    ...tw.textBase
  }
})
