/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateProfile, Profile } from '../types';
import * as LS from 'shared/lib';


const initialState: StateProfile = {
  data     : undefined,
  readonly : true,
  loading  : false,
  error    : undefined
};


export const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = slice;
