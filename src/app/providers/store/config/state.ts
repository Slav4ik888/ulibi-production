import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateArticleDetails } from 'entities/article';
import type { StateCounter } from 'entities/counter';
import { StateProfile } from 'entities/profile';
import { StateUser } from 'entities/user/model';
import { AddCommentFormSchema } from 'features/add-comment-form';
import { StateLogin } from 'features/auth-by-username/model';
import { StateArticleDetailsComments } from 'pages';
import { NavigateOptions, To } from 'react-router-dom';


export interface StateSchema {
  counter : StateCounter
  user    : StateUser

  // Async reducers
  login?                  : StateLogin
  profile?                : StateProfile
  articleDetails?         : StateArticleDetails
  articleDetailsComments? : StateArticleDetailsComments
  addCommentForm?         : AddCommentFormSchema
}

export type StateKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap : () => ReducersMapObject<StateSchema>
  reduce        : (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add           : (key: StateKey, reducer: Reducer) => void
  remove        : (key: StateKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api       : AxiosInstance
  navigate? : (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue : T
  extra       : ThunkExtraArg
  state       : StateSchema
}
