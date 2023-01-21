import { createSelector } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileForm = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.form || {} as Profile
);
