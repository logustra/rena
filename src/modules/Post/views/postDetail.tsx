import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import { PostCommentModel } from '../typings/postDetailTypings'
import {
  postDetailInitState,
  postDetailMutations,
  postDetailRequest,
  postCommentListRequest
} from '../stores/PostDetail'
import { 
  postAuthorInitState, 
  postAuthorMutations,
  authorDetailRequest
} from '../stores/PostAuthor'

import { StoresContext } from '@/stores'

import { 
  Text, 
  View,
  StyleSheet
} from 'react-native'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'
import { 
  RContainer,
  RLayout 
} from 'templates'

import { typography } from '@/styles'

export default function PostDetail () {
  const { postId }: any = useRoute().params
  const navigation = useNavigation()
  const { commonState } = React.useContext<any>(StoresContext)
  
  const [
    postDetailState, 
    postDetailDispatch
  ] = React.useReducer(
    postDetailMutations, 
    postDetailInitState
  )
  const { 
    postDetail, 
    postCommentList 
  } = postDetailState

  const [
    postAuthorState, 
    postAuthorDispatch
  ] = React.useReducer(
    postAuthorMutations, 
    postAuthorInitState
  )
  const { authorDetail } = postAuthorState

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postDetailRequest(postDetailDispatch, postId)
    }
  }, [postId, commonState.isRefreshing])

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
  }, [postDetail.data.userId])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
    }
  }, [postDetail.data.userId, commonState.isRefreshing])

  React.useEffect(() => {
    postCommentListRequest(postDetailDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postCommentListRequest(postDetailDispatch)
    }
  }, [commonState.isRefreshing])

  return (
    <RLayout>
      <RContainer>
        {postDetail.isFetching ? (
          <RLoading />
        ) : (
          <RCard>
            <Text style={[styles.postTitle]}>
              {postDetail.data.title}
            </Text>

            <Text>
              Written by
              
              <Text
                style={[tw.textBlue700]}
                onPress={() => navigation.navigate('post.author', {
                  userId: postDetail.data.userId,
                  title: authorDetail.data.name
                })}
              >
                {' ' + authorDetail.data.name}
              </Text>
            </Text>

            <Text style={[tw.mT3]}>
              {postDetail.data.body}
            </Text>
          </RCard>
        )}

        <View>
          <Text style={[styles.commentTitle]}>
            Comments
          </Text>

          {postCommentList.isFetching ? (
            <RLoading />
          ) : (
            postCommentList.data.map((item: PostCommentModel) => (
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

  commentTitle: {
    fontFamily: typography.lato.bold,
    ...tw.textBase,
    ...tw.mY4
  }
})
