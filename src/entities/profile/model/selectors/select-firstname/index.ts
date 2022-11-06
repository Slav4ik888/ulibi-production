import { createSelector } from '@reduxjs/toolkit';
import { StateProfile } from '../..';
import { selectStateProfile } from '../select-state-profile';

export const selectProfileFirstName = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.data?.firstname || ''
);
