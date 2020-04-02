import React from 'react'
import { useRoute } from '@react-navigation/native'

import {
  postAuthorInitState,
  postAuthorMutations,
  authorDetailRequest,
  postAuthorRequest
} from '../stores/PostAuthor'
import { PostList } from '../components'

import { StoresContext } from '@/stores'

import { Text } from 'react-native'

import { Loading } from 'atoms'
import { Card } from 'molecules'
import { Layout } from 'templates'

export default function PostAuthor () {
  const { userId }: any = useRoute().params
  const { commonState } = React.useContext<any>(StoresContext)
  
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorMutations, postAuthorInitState)
  const { authorDetail, postAuthor } = postAuthorState

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
              <Text>
                {authorDetail.data.name}
              </Text>
              
              <Text>
                Email: {authorDetail.data.email} {'\n'}
                Website: {authorDetail.data.website}
              </Text>
            </React.Fragment>
          </Card>
        )}

        <Text>
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

// const StyledArticle = Styled.Text`
//   ${font.size.base}
//   ${font.family.lato.bold}
//   ${margin.bottom[4]}
// `

// const StyledCard = Styled(Card)`
//   ${margin.bottom[4]}
// `

// const StyledCardTitle = Styled.Text`
//   ${font.size.base}
//   ${font.family.lato.bold}
// `

// const StyledCardDescription = Styled.Text`
//   ${margin.top[3]}
// `
