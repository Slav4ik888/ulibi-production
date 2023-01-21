import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../..';
import { selectCounter } from '../counter';


export const selectCounterValue = createSelector(
  selectCounter,
  (counter: CounterSchema) => counter.value
);
