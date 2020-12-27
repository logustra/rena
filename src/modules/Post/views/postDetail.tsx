import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import {
  postInitState,
  postMutations,
  postRequest
} from '../stores/Post'

import { CommentsDataModel } from '../typings/commentsTypings'
import {
  commentsInitState,
  commentsMutations,
  commentsRequest
} from '../stores/Comments'

import { UsersDataModel } from '@/typings/usersTypings'
import { usersRequest } from '@/stores/Users'

import {
  useCommonStore,
  useUsersStore
} from '@/utils'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import {
  RError,
  RLoading
} from 'atoms'
import { RCard } from 'molecules'
import {
  RContainer,
  RLayout
} from 'templates'

import { typography } from '@/styles'

export default function PostDetail () {
  const navigation = useNavigation()
  const { commonState } = useCommonStore()

  const {
    usersState,
    usersDispatch
  } = useUsersStore()

  function handleUser (userId: number) {
    return usersState.data.find((item: UsersDataModel) => item.id === userId)
  }

  React.useEffect(() => {
    usersRequest(usersDispatch)
  }, [usersDispatch])

  React.useEffect(() => {
    if (commonState.isRefreshing) usersRequest(usersDispatch)
  }, [usersDispatch, commonState.isRefreshing])

  const { postId }: any = useRoute().params
  const [
    postState,
    postDispatch
  ] = React.useReducer(
    postMutations,
    postInitState
  )

  React.useEffect(() => {
    if (postId) postRequest(postDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    if (commonState.isRefreshing) if (postId) postRequest(postDispatch, postId)
  }, [commonState.isRefreshing, postId])

  const [
    commentsState,
    commentsDispatch
  ] = React.useReducer(
    commentsMutations,
    commentsInitState
  )

  React.useEffect(() => {
    if (postId) commentsRequest(commentsDispatch, { postId })
  }, [postId])

  React.useEffect(() => {
    if (commonState.isRefreshing) if (postId) commentsRequest(commentsDispatch, { postId })
  }, [commonState.isRefreshing, postId])

  return (
    <RLayout>
      <RContainer>
        {postState.isFetching && <RLoading />}
        {postState.isError && <RError />}
        {Object.keys(postState.data).length !== 0 && (
          <RCard>
            <Text style={[styles.postTitle]}>
              {postState.data.title}
            </Text>

            {postState.data.userId && usersState.data.length !== 0 && (
              <Text>
                Written by
                <Text
                  style={[tw.textBlue700]}
                  onPress={() => navigation.navigate('post.author', {
                    userId: postState.data.userId
                  })}
                >
                  {' ' + handleUser(postState.data.userId).name}
                </Text>
              </Text>
            )}

            <Text style={[tw.mT3]}>
              {postState.data.body}
            </Text>
          </RCard>
        )}

        <View>
          <Text style={[styles.commentsTitle]}>
            Comments
          </Text>

          {commentsState.isFetching && <RLoading />}
          {commentsState.isError && <RError />}
          {commentsState.data.length !== 0 && (
            commentsState.data.map((item: CommentsDataModel) => (
              <RCard
                key={`comment-${item.id}`}
                style={[tw.mB4]}
              >
                <Text style={[styles.rcardTitle]}>
                  {item.name}
                </Text>

                <Text style={[tw.mT3]}>
                  {item.body}
                </Text>
              </RCard>
            ))
          )}
        </View>
      </RContainer>
    </RLayout>
  )
}

const styles = StyleSheet.create({
  postTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textXl
  },

  rcardTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textBase
  },

  commentsTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textBase,
    ...tw.mY4
  }
})
