import React from 'react'

export default [
  {
    name: 'example.index',
    component: React.lazy(() => import('./views/exampleIndex')),
    options: {
      title: 'Example'
    }
  }
]
