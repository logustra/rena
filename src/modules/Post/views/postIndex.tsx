import React from 'react'

import {
  postIndexInitState,
  postIndexMutations,
  authorListRequest,
  postListRequest
} from '../stores/PostIndex'
import { PostList } from '../components'

import { StoresContext } from '@/stores'

import { Loading } from 'atoms'
import { Layout } from 'templates'

export default function PostIndex () {
  const { commonState } = React.useContext<any>(StoresContext)

  const [postIndexState, postIndexDispatch] = React.useReducer(postIndexMutations, postIndexInitState)
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
