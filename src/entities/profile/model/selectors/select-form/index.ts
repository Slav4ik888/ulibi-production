import { createSelector } from '@reduxjs/toolkit';
import { Profile, StateProfile } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileForm = createSelector(
  selectStateProfile,
  (stateProfile: StateProfile) => stateProfile?.form || {} as Profile
);
