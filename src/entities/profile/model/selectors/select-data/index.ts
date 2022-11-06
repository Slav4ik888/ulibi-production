import { createSelector } from '@reduxjs/toolkit';
import { Profile, StateProfile } from '../..';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileData = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.data || {} as Profile
);
