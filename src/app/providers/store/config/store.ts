import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { State } from './state'


export function createReduxStore(initialState?: State) {
  return configureStore<State>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState || {}
  })
}
