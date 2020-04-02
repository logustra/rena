import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Props, PostListModel } from './postList.contracts'

import { 
  View, 
  Text 
} from 'react-native'

import { Loading } from 'atoms'
import { Card } from 'molecules'

export default function PostList ({ withAuthor, data }: Props) {
  const navigation = useNavigation()
  
  return (
    <View>
      {data.isFetching ? (
        <Loading />
      ) : (
        data.data.map((item: PostListModel) => (
          <Card key={`post-${item.id}`}>
            <React.Fragment>
              <Text 
                onPress={() => navigation.navigate('post.detail', {
                  postId: item.id
                })}
              >
                {item.title}
              </Text>

              {withAuthor && item.author ? (
                <Text>
                  Written by

                  <Text
                    onPress={() => navigation.navigate('post.author', {
                      userId: item.userId
                    })}
                  >
                    {' ' + item.author.name}
                  </Text>
                </Text>
              ) : (
                null
              )}

              <Text>
                {item.body}
              </Text>
            </React.Fragment>
          </Card>
        ))
      )}
    </View>
  )
}

// const StyledPostList = Styled.View`
  
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
