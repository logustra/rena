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

import { Loading } from 'atoms'
import { Card } from 'molecules'
import { Layout } from 'templates'

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
    <Layout>
      <React.Fragment>
        {authorDetail.isFetching ? (
          <Loading />
        ) : (
          <Card>
            <React.Fragment>
              <Text style={[styles.title]}>
                {authorDetail.data.name}
              </Text>
              
              <Text style={[tw.mT3]}>
                Email: {authorDetail.data.email} {'\n'}
                Website: {authorDetail.data.website}
              </Text>
            </React.Fragment>
          </Card>
        )}

        <Text style={[styles.title, tw.mY4]}>
          Posted Article
        </Text>

        {postAuthor.isFetching ? (
          <Loading />
        ) : (
          <PostList
            withAuthor={false}
            data={postAuthor}
          />
        )}
      </React.Fragment>
    </Layout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.lato.bold,
    ...tw.textBase
  }
})
