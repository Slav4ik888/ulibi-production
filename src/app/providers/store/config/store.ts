import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { loginReducer } from 'features/auth-by-username';
import { State } from './state'


export function createReduxStore(initialState?: State) {
  const rootReducer: ReducersMapObject<State> = {
    counter : counterReducer,
    user    : userReducer,
    login   : loginReducer
  };

  return configureStore<State>({
    reducer        : rootReducer,
    devTools       : __IS_DEV__,
    preloadedState : initialState || {}
  })
}
