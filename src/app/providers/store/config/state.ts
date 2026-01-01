import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateSchemaArticle } from 'entities/article';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { AddCommentFormSchema } from 'features/add-comment-form';
import { LoginSchema } from 'features/auth-by-username';
import { StateSchemaScrollRestore } from 'features/scroll-restore';
import { StateSchemaArticleDetailsPage } from 'pages/article-details-page';
import { StateSchemaArticlesPage } from 'pages/articles-page';
import { NavigateOptions, To } from 'react-router-dom';
import { rtkApi } from 'shared/api';


export interface StateSchema {
  counter              : CounterSchema
  user                 : UserSchema
  scrollRestore        : StateSchemaScrollRestore
  [rtkApi.reducerPath] : ReturnType<typeof rtkApi.reducer>

  // Async reducers
  login?               : LoginSchema
  profile?             : ProfileSchema
  article?             : StateSchemaArticle
  articleDetailsPage?  : StateSchemaArticleDetailsPage
  articlesPage?        : StateSchemaArticlesPage
  addCommentForm?      : AddCommentFormSchema
}

export type StateKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateKey, boolean> // True - mounted, false - not mounted

export interface ReducerManager {
  getReducerMap      : () => ReducersMapObject<StateSchema>
  reduce             : (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add                : (key: StateKey, reducer: Reducer) => void
  remove             : (key: StateKey) => void
  getMountedReducers : () => MountedReducers
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
