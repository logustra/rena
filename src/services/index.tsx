import {
  API_URL,
  TIMEOUT
} from 'react-native-dotenv'
import Http from './Http'

export const httpService = new Http({
  baseURL: API_URL,
  timeout: Number(TIMEOUT)
})
