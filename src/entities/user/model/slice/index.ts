/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { StateUser } from '../types';


const initialState: StateUser = {
  authData: null
};


export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
// export const {  } = slice.actions;
export const { reducer: userReducer } = slice;
