import { createSelector } from '@reduxjs/toolkit';
import { StateCounter } from '../..';
import { selectCounter } from '../counter';


export const selectCounterValue = createSelector(
  selectCounter,
  (counter: StateCounter) => counter.value
);
