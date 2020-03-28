import React from 'react'

import {
  authorListRequest,
  postListRequest,
  postIndexInitState,
  postIndexReducer 
} from '../stores/PostIndex'
import { PostList } from '../components'

import { Stores } from '@/store'

import { Loading } from 'atoms'
import { Layout } from 'templates'

export default function PostIndex () {
  const { commonState } = React.useContext<any>(Stores)

  const [postIndexState, postIndexDispatch] = React.useReducer(postIndexReducer, postIndexInitState)
  const { postList } = postIndexState

  React.useEffect(() => {
    authorListRequest(postIndexDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      authorListRequest(postIndexDispatch)
    }
  }, [commonState.isRefreshing])

  React.useEffect(() => {
    postListRequest(postIndexDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postListRequest(postIndexDispatch)
    }
  }, [commonState.isRefreshing])

  return (
    <Layout>
      {postList.isFetching ? (
        <Loading />
      ) : (
        <PostList
          withAuthor={true}
          data={postList}
        />
      )}
    </Layout>
  )
}
