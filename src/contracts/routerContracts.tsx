import { FunctionComponent } from 'react'

export interface RoutesModel {
  name: string,
  component: FunctionComponent,
  options: {
    title: string
  }
}
