import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';
import { Profile } from 'entities/profile';


export const selectProfileForm = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.form || {} as Profile
);
