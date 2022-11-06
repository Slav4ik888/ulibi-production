/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateProfile, Profile } from '../types';
import { fetchProfileData } from '..';


const initialState: StateProfile = {
  data     : undefined,
  readonly : true,
  loading  : false,
  error    : undefined
};


export const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, (state, actions) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data    = payload;
        state.error   = undefined;
        state.loading = false;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = slice;
