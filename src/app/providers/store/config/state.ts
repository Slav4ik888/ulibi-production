import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateArticleDetails } from 'entities/article';
import type { StateCounter } from 'entities/counter';
import { StateProfile } from 'entities/profile';
import { StateUser } from 'entities/user/model';
import { StateLogin } from 'features/auth-by-username/model';
import { NavigateOptions, To } from 'react-router-dom';


export interface State {
  counter         : StateCounter
  user            : StateUser

  // Async reducers
  login?          : StateLogin
  profile?        : StateProfile
  articleDetails? : StateArticleDetails
}

export type StateKey = keyof State;

export interface ReducerManager {
  getReducerMap : () => ReducersMapObject<State>
  reduce        : (state: State, action: AnyAction) => CombinedState<State>
  add           : (key: StateKey, reducer: Reducer) => void
  remove        : (key: StateKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<State> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api       : AxiosInstance
  navigate? : (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue : T
  extra       : ThunkExtraArg
  state       : State
}
