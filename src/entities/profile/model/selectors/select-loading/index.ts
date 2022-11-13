import { createSelector } from '@reduxjs/toolkit';
import { StateProfile } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileLoading = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.loading || false
);
