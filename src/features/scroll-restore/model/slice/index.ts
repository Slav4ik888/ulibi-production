/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema, StateSchemaScrollRestore } from '../types/state-schema';


const initialState: StateSchemaScrollRestore = {
  scroll : {}
};


export const slice = createSlice({
  name: 'scroll-restore',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload: { path, position } }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[path] = position;
    }
  }
})

export const { actions, reducer } = slice;
