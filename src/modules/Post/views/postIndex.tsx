import React from 'react'

import {
  postIndexInitState,
  postIndexMutations,
  authorListRequest,
  postListRequest
} from '../stores/PostIndex'
import { PostList } from '../components'

import { StoresContext } from '@/stores'

import { RLoading } from 'atoms'
import { 
  RContainer,
  RLayout
} from 'templates'

export default function PostIndex () {
  const { commonState } = React.useContext<any>(StoresContext)

  const [
    postIndexState, 
    postIndexDispatch
  ] = React.useReducer(
    postIndexMutations,
    postIndexInitState
  )
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
    <RLayout>
      <RContainer>
        {postList.isFetching ? (
          <RLoading />
        ) : (
          <PostList
            withAuthor={true}
            data={postList}
          />
        )}
      </RContainer>
    </RLayout>
  )
}
