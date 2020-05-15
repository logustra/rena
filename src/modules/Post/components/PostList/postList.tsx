import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import { Props } from './postList.typings'
import { PostsDataModel } from '../../typings/postsTypings'

import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'

import { 
  RError,
  RLoading 
} from 'atoms'
import { RCard } from 'molecules'

import { typography } from '@/styles'

export default function PostList ({ withAuthor, users, data }: Props) {
  const navigation = useNavigation()

  function handleUser (userId: number): any {
    if (users) return users.data.find(item => item.id === userId)
  }
  
  return (
    <View>
      {data.isFetching && <RLoading />}
      {data.isError && <RError />}
      {data.data.length !== 0 && (
        data.data.map((item: PostsDataModel) => (
          <RCard 
            key={`post-${item.id}`}
            style={[tw.mB4]}
          >
            <Text
              style={[styles.title]}
              onPress={() => navigation.navigate('post.detail', {
                postId: item.id
              })}
            >
              {item.title}
            </Text>

            {withAuthor && users && users.data.length !== 0 && (
              <Text>
                Written by
                <Text
                  style={[tw.textBlue700]}
                  onPress={() => navigation.navigate('post.author', {
                    userId: item.userId
                  })}
                >
                  {' ' + handleUser(item.userId).name}
                </Text>
              </Text>
            )}

            <Text style={[tw.mT3]}>
              {item.body}
            </Text>
          </RCard>
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.lato.bold,
    ...tw.textBase
  }
})
