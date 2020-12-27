import React from 'react'
import { useRoute } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import {
  userInitState,
  userMutations,
  userRequest
} from '../stores/User'
import {
  postsInitState,
  postsMutations,
  postsRequest
} from '../stores/Posts'

import { useCommonStore } from '@/utils'

import { PostList } from '../components'

import {
  Text,
  StyleSheet
} from 'react-native'

import {
  RDivider,
  RError,
  RLoading
} from 'atoms'
import { RCard } from 'molecules'
import {
  RContainer,
  RLayout
} from 'templates'

import { typography } from '@/styles'

export default function PostAuthor () {
  const { commonState } = useCommonStore()

  const { userId }: any = useRoute().params
  const [
    userState,
    userDispatch
  ] = React.useReducer(
    userMutations,
    userInitState
  )

  React.useEffect(() => {
    if (userId) userRequest(userDispatch, userId)
  }, [userId])

  React.useEffect(() => {
    if (commonState.isRefreshing) if (userId) userRequest(userDispatch, userId)
  }, [commonState.isRefreshing, userId])

  const [
    postsState,
    postsDispatch
  ] = React.useReducer(
    postsMutations,
    postsInitState
  )

  React.useEffect(() => {
    if (userId) postsRequest(postsDispatch, { userId })
  }, [userId])

  React.useEffect(() => {
    if (commonState.isRefreshing) if (userId) postsRequest(postsDispatch, { userId })
  }, [commonState.isRefreshing, userId])

  return (
    <RLayout>
      <RContainer>
        {userState.isFetching && <RLoading />}
        {userState.isError && <RError />}
        {Object.keys(userState.data).length !== 0 && (
          <RCard>
            <Text style={[styles.authorTitle]}>
              {userState.data.name}
            </Text>

            <RDivider />

            <Text>
              Email: {userState.data.email} {'\n'}
              Website: {userState.data.website}
            </Text>
          </RCard>
        )}

        <Text style={[styles.articleTitle, tw.mY4]}>
          Posted Article
        </Text>

        <PostList
          withAuthor={false}
          data={postsState}
        />
      </RContainer>
    </RLayout>
  )
}

const styles = StyleSheet.create({
  authorTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textXl
  },

  articleTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textBase
  }
})
