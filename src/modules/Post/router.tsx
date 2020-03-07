import React from 'react'

export default [
  {
    name: 'post.index',
    component: React.lazy(() => import('./views/postIndex')),
    options: {
      title: 'Rena'
    }
  }
]
