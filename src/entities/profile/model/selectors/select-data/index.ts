import { createSelector } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileData = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.data || {} as Profile
);
