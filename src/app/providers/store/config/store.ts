import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducer-manager'
import { State } from './state'


export function createReduxStore(
  initialState?  : State,
  asyncReducers? : ReducersMapObject<State>
) {
  const rootReducers: ReducersMapObject<State> = {
    ...asyncReducers,
    counter : counterReducer,
    user    : userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<State>({
    reducer        : reducerManager.reduce,
    devTools       : __IS_DEV__,
    preloadedState : initialState || {}
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
