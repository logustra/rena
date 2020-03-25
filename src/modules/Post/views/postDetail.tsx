import React from 'react'
import { Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import Styled from 'styled-components/native'

import { PostCommentModel } from '../contracts/postDetailContracts'
import {
  postDetailRequest,
  postCommentListRequest,
  postDetailInitState,
  postDetailReducer 
} from '../stores/PostDetail'
import { 
  authorDetailRequest, 
  postAuthorInitState, 
  postAuthorReducer 
} from '../stores/PostAuthor'

import { Loading } from 'atoms'
import { 
  Card,
  Layout
} from 'templates'

import {
  font,
  margin,
  text
} from '@/styles'

export default function PostDetail () {
  const { postId }: {[key: string]: string} = useRoute().params
  const navigation = useNavigation()
  
  const [postDetailState, postDetailDispatch] = React.useReducer(postDetailReducer, postDetailInitState)
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const { postDetail, postCommentList } = postDetailState
  const { authorDetail } = postAuthorState

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
  }, [postDetail.data.userId])

  React.useEffect(() => {
    postCommentListRequest(postDetailDispatch)
  }, [])

  return (
    <Layout>
      <React.Fragment>
        {postDetail.isFetching ? (
          <Loading />
        ) : (
          <StyledCard>
            <React.Fragment>
              <StyledPostTitle>
                {postDetail.data.title}
              </StyledPostTitle>

              <Text>
                Written by
                
                <StyledCardLink
                  onPress={() => navigation.navigate('post.author', {
                    userId: postDetail.data.userId,
                    title: authorDetail.data.name
                  })}
                >
                  {' ' + authorDetail.data.name}
                </StyledCardLink>
              </Text>

              <StyledCardDescription>
                {postDetail.data.body}
              </StyledCardDescription>
            </React.Fragment>
          </StyledCard>
        )}

        <View>
          <StyledComment>
            Comments
          </StyledComment>

          {postCommentList.isFetching ? (
            <Loading />
          ) : (
            postCommentList.data.map((item: PostCommentModel) => (
              <StyledCard key={`comment-${item.id}`}>
                <React.Fragment>
                  <StyledCardTitle>
                    {item.name}
                  </StyledCardTitle>

                  <StyledCardDescription>
                    {item.body}
                  </StyledCardDescription>
                </React.Fragment>
              </StyledCard>
            ))
          )}
        </View>
      </React.Fragment>
    </Layout>
  )
}

const StyledPostTitle = Styled.Text`
  ${font.size.xl}
  ${font.family.lato.bold}
`

const StyledComment = Styled.Text`
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

const StyledCardLink = Styled.Text`
  ${text.blue}
`
