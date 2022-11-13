import { createSelector } from '@reduxjs/toolkit';
import { StateProfile } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileReadonly = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.readonly || false
);
