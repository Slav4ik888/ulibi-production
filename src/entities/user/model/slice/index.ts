/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateUser, User } from '../types';
import * as LS from 'shared/lib';


const initialState: StateUser = {
  authData : null,
  _inited  : false
};


export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    initAuthData: (state) => {
      const user = LS.getAuth();
      state.authData = user;
      state._inited  = true;
    },
    logout: (state) => {
      LS.clearAuth();
      state.authData = undefined;
    }
  }
})

export const {
  actions: userActions,
  reducer: userReducer
} = slice;
