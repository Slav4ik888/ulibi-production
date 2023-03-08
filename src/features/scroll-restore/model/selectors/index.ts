import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

export const selectScrollPositionModule  = (state: StateSchema) => state?.scrollRestore;
export const selectScrollPosition = (state: StateSchema) => selectScrollPositionModule(state)?.scroll;

export const selectScrollByPath = createSelector(
  selectScrollPosition,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
