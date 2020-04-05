import React from 'react'
import { useRoute } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import {
  postAuthorInitState,
  postAuthorMutations,
  authorDetailRequest,
  postAuthorRequest
} from '../stores/PostAuthor'
import { PostList } from '../components'

import { StoresContext } from '@/stores'

import { 
  Text,
  StyleSheet
} from 'react-native'

import { 
  RDivider,
  RLoading 
} from 'atoms'
import { RCard } from 'molecules'
import { RLayout } from 'templates'

import { typography } from '@/styles'

export default function PostAuthor () {
  const { userId }: any = useRoute().params
  const { commonState } = React.useContext<any>(StoresContext)
  
  const [
    postAuthorState, 
    postAuthorDispatch
  ] = React.useReducer(
    postAuthorMutations, 
    postAuthorInitState
  )
  const { 
    authorDetail, 
    postAuthor 
  } = postAuthorState

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, userId)
  }, [userId])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      authorDetailRequest(postAuthorDispatch, userId)
    }
  }, [userId, commonState.isRefreshing])

  React.useEffect(() => {
    postAuthorRequest(postAuthorDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postAuthorRequest(postAuthorDispatch)
    }
  }, [commonState.isRefreshing])

  return (
    <RLayout>
      <React.Fragment>
        {authorDetail.isFetching ? (
          <RLoading />
        ) : (
          <RCard>
            <React.Fragment>
              <Text style={[styles.authorTitle]}>
                {authorDetail.data.name}
              </Text>
              
              <RDivider />

              <Text>
                Email: {authorDetail.data.email} {'\n'}
                Website: {authorDetail.data.website}
              </Text>
            </React.Fragment>
          </RCard>
        )}

        <Text style={[styles.articleTitle, tw.mY4]}>
          Posted Article
        </Text>

        {postAuthor.isFetching ? (
          <RLoading />
        ) : (
          <PostList
            withAuthor={false}
            data={postAuthor}
          />
        )}
      </React.Fragment>
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
