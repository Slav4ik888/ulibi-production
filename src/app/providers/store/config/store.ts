import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { scrollRestoreReducer } from 'features/scroll-restore'
import { api } from 'shared/api'
import { createReducerManager } from './reducer-manager'
import { StateSchema } from './state'



export function createReduxStore(
  initialState?  : StateSchema,
  asyncReducers? : ReducersMapObject<StateSchema>
) {
  const
    rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter       : counterReducer,
      user          : userReducer,
      scrollRestore : scrollRestoreReducer
    },
    reducerManager = createReducerManager(rootReducers),
    extraArg = {
      api
    };

  const store = configureStore({
    reducer        : reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools       : __IS_DEV__,
    preloadedState : initialState || {},
    middleware     : getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
