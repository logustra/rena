import React from 'react'
import { tw } from 'react-native-tailwindcss'

import { 
  exampleIndexInitState,
  exampleIndexMutations,
  exampleRequest
} from '../stores'

import { StoresContext } from '@/stores'

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
  const { commonState } = React.useContext<any>(StoresContext)

  const [
    exampleState, 
    exampleDispatch
  ] = React.useReducer(
    exampleIndexMutations, 
    exampleIndexInitState
  )

  React.useEffect(() => {
    exampleRequest(exampleDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      exampleRequest(exampleDispatch)
    }
  }, [commonState.isRefreshing])

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
