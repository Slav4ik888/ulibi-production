import { createSelector } from '@reduxjs/toolkit';
import { StateProfile } from '../..';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileError = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.loading || ''
);
