import React from 'react'
import { TransitionPresets } from '@react-navigation/stack'

export default [
  {
    name: 'post.index',
    component: React.lazy(() => import('./views/postIndex')),
    options: {
      title: 'Rena',
      ...TransitionPresets.SlideFromRightIOS
    }
  },

  {
    name: 'post.detail',
    component: React.lazy(() => import('./views/postDetail')),
    options: {
      title: 'Detail',
      ...TransitionPresets.SlideFromRightIOS
    },

    initialParams: {
      postId: '0'
    }
  },

  {
    name: 'post.author',
    component: React.lazy(() => import('./views/postAuthor')),
    options: {
      title: 'Author',
      ...TransitionPresets.SlideFromRightIOS
    },

    initialParams: {
      userId: '0'
    }
  }
]
