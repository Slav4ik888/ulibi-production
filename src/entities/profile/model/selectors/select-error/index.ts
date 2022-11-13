import { createSelector } from '@reduxjs/toolkit';
import { StateProfile } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileError = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.error || ''
);
