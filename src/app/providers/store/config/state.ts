import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { StateCounter } from 'entities/counter';
import { StateUser } from 'entities/user/model';
import { StateLogin } from 'features/auth-by-username/model';

export interface State {
  counter : StateCounter
  user    : StateUser

  // Async reducers
  login?  : StateLogin
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
