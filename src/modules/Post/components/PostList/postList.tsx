import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Styled from 'styled-components/native'

import { PostListModel, PostListProps } from '../../contracts/postListContracts'

import { Loading } from 'atoms'
import { Card } from 'templates'

import { 
  font,
  margin,
  text
} from '@/styles'

export default function PostList ({ withAuthor, data }: PostListProps) {
  const navigation = useNavigation()
  
  return (
    <StyledPostList>
      {data.isFetching ? (
        <Loading />
      ) : (
        data.data.map((item: PostListModel) => (
          <StyledCard key={`post-${item.id}`}>
            <React.Fragment>
              <StyledCardTitle 
                onPress={() => navigation.push('post.detail', {
                  postId: item.id,
                  title: item.title
                })}
              >
                {item.title}
              </StyledCardTitle>

              {withAuthor && item.author ? (
                <Text>
                  Written by

                  <StyledCardLink
                    onPress={() => navigation.push('post.author', {
                      userId: item.userId,
                      title: item.title
                    })}
                  >
                    {' ' + item.author.name}
                  </StyledCardLink>
                </Text>
              ) : (
                null
              )}

              <StyledCardDescription>
                {item.body}
              </StyledCardDescription>
            </React.Fragment>
          </StyledCard>
        ))
      )}
    </StyledPostList>
  )
}

const StyledPostList = Styled.View`
  
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