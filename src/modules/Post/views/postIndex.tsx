import React from 'react'

import {
  postsInitState,
  postsMutations,
  postsRequest
} from '../stores/Posts'

import {
  usersInitState,
  usersMutations,
  usersRequest
} from '@/stores/Users'

import { useCommonStore } from '@/utils'

import { PostList } from '../components'

import {
  RContainer,
  RLayout
} from 'templates'

export default function PostIndex () {
  const { commonState } = useCommonStore()

  const [
    postsState,
    postsDispatch
  ] = React.useReducer(
    postsMutations,
    postsInitState
  )

  React.useEffect(() => {
    postsRequest(postsDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) postsRequest(postsDispatch)
  }, [commonState.isRefreshing])

  const [
    usersState,
    usersDispatch
  ] = React.useReducer(
    usersMutations,
    usersInitState
  )

  React.useEffect(() => {
    usersRequest(usersDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) usersRequest(usersDispatch)
  }, [commonState.isRefreshing])

  return (
    <RLayout>
      <RContainer>
        <PostList
          withAuthor={true}
          users={usersState}
          data={postsState}
        />
      </RContainer>
    </RLayout>
  )
}
