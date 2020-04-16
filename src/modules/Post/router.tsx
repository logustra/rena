import React from 'react'

export default [
  {
    name: 'post.index',
    component: React.lazy(() => import('./views/postIndex')),
    options: {
      title: 'Rena'
    }
  },

  {
    name: 'post.detail',
    component: React.lazy(() => import('./views/postDetail')),
    options: {
      title: 'Detail'
    },

    initialParams: {
      postId: '0'
    }
  },

  {
    name: 'post.author',
    component: React.lazy(() => import('./views/postAuthor')),
    options: {
      title: 'Author'
    },

    initialParams: {
      userId: '0'
    }
  }
]
