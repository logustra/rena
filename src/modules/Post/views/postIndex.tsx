import React from 'react'

import {
  authorListRequest,
  postListRequest,
  postIndexInitState,
  postIndexReducer 
} from '../stores/PostIndex'

import { Loading } from 'atoms'
import { Layout } from 'templates'

import { PostList } from '../components'

export default function PostIndex () {
  const [postIndexState, postIndexDispatch] = React.useReducer(postIndexReducer, postIndexInitState)
  const { postList } = postIndexState

  React.useEffect(() => {
    authorListRequest(postIndexDispatch)
  }, [])

  React.useEffect(() => {
    postListRequest(postIndexDispatch)
  }, [])

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
