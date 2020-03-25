import React from 'react'
import { useRoute } from '@react-navigation/native'
import Styled from 'styled-components/native'

import {
  authorDetailRequest,
  postAuthorRequest,
  postAuthorInitState,
  postAuthorReducer 
} from '../stores/PostAuthor'

import { PostList } from '../components'

import { Loading } from 'atoms'
import { 
  Card,
  Layout
} from 'templates'

import {
  font,
  margin
} from '@/styles'

export default function PostAuthor () {
  const { userId }: {[key: string]: string} = useRoute().params
  
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const { authorDetail, postAuthor } = postAuthorState

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, userId)
  }, [userId])

  React.useEffect(() => {
    postAuthorRequest(postAuthorDispatch)
  }, [])

  return (
    <Layout>
      <React.Fragment>
        {authorDetail.isFetching ? (
          <Loading />
        ) : (
          <StyledCard>
            <React.Fragment>
              <StyledCardTitle>
                {authorDetail.data.name}
              </StyledCardTitle>
              
              <StyledCardDescription>
                Email: {authorDetail.data.email} {'\n'}
                Website: {authorDetail.data.website}
              </StyledCardDescription>
            </React.Fragment>
          </StyledCard>
        )}

        <StyledArticle>
          Posted Article
        </StyledArticle>

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

const StyledArticle = Styled.Text`
  ${font.size.base}
  ${font.family.lato.bold}
  ${margin.bottom[4]}
`

const StyledCard = Styled(Card)`
  ${margin.bottom[4]}
`

const StyledCardTitle = Styled.Text`
  ${font.size.base}
  ${font.family.lato.bold}
`

const StyledCardDescription = Styled.Text`
  ${margin.top[3]}
`
