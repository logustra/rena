import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export function useStorage (key: string, dispatch: Function, action: Function) {
  const [isPulling, setIsPulling] = React.useState({ isPulling: false })

  async function pullStorage () {
    setIsPulling({ isPulling: true })

    const storage = await AsyncStorage.getItem(key)

    if (storage) {
      action(dispatch, JSON.parse(storage))
      setIsPulling({ isPulling: false })
    }
  }

  React.useEffect(() => {
    pullStorage()
  }, []) // eslint-disable-line

  return [isPulling]
}
