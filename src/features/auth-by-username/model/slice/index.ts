/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services';
import { StateLogin } from '../types';


const initialState: StateLogin = {
  username : '',
  password : '',
  loading  : false
};


export const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadingOff: (state) => {
      state.loading = false;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    clearError: (state) => {
      state.error = '';
    },
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    clearUsernamePassword: (state) => {
      state.username = '';
      state.password = '';
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, (state, actions) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, actions) => {
        state.error = undefined;
        state.loading = false;
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
  }
})

export const { actions: loginActions } = slice;
export const { reducer: loginReducer } = slice;
