import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import { PostCommentModel } from '../contracts/postDetailContracts'
import {
  postDetailInitState,
  postDetailMutations,
  postDetailRequest,
  postCommentListRequest,
} from '../stores/PostDetail'
import { 
  postAuthorInitState, 
  postAuthorMutations,
  authorDetailRequest
} from '../stores/PostAuthor'

import { StoresContext } from '@/stores'

import { Text, View } from 'react-native'

import { Loading } from 'atoms'
import { Card } from 'molecules'
import { Layout } from 'templates'

export default function PostDetail () {
  const { postId }: any = useRoute().params
  const navigation = useNavigation()
  const { commonState } = React.useContext<any>(StoresContext)
  
  const [postDetailState, postDetailDispatch] = React.useReducer(postDetailMutations, postDetailInitState)
  const { postDetail, postCommentList } = postDetailState

  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorMutations, postAuthorInitState)
  const { authorDetail } = postAuthorState

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postDetailRequest(postDetailDispatch, postId)
    }
  }, [postId, commonState.isRefreshing])

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
  }, [postDetail.data.userId])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
    }
  }, [postDetail.data.userId, commonState.isRefreshing])

  React.useEffect(() => {
    postCommentListRequest(postDetailDispatch)
  }, [])

  React.useEffect(() => {
    if (commonState.isRefreshing) {
      postCommentListRequest(postDetailDispatch)
    }
  }, [commonState.isRefreshing])

  return (
    <Layout>
      <React.Fragment>
        {postDetail.isFetching ? (
          <Loading />
        ) : (
          <Card>
            <React.Fragment>
              <Text>
                {postDetail.data.title}
              </Text>

              <Text>
                Written by
                
                <Text
                  onPress={() => navigation.navigate('post.author', {
                    userId: postDetail.data.userId,
                    title: authorDetail.data.name
                  })}
                >
                  {' ' + authorDetail.data.name}
                </Text>
              </Text>

              <Text>
                {postDetail.data.body}
              </Text>
            </React.Fragment>
          </Card>
        )}

        <View>
          <Text>
            Comments
          </Text>

          {postCommentList.isFetching ? (
            <Loading />
          ) : (
            postCommentList.data.map((item: PostCommentModel) => (
              <Card key={`comment-${item.id}`}>
                <React.Fragment>
                  <Text>
                    {item.name}
                  </Text>

                  <Text>
                    {item.body}
                  </Text>
                </React.Fragment>
              </Card>
            ))
          )}
        </View>
      </React.Fragment>
    </Layout>
  )
}

// const StyledPostTitle = Styled.Text`
//   ${font.size.xl}
//   ${font.family.lato.bold}
// `

// const StyledComment = Styled.Text`
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

// const StyledCardLink = Styled.Text`
//   ${text.blue}
// `
