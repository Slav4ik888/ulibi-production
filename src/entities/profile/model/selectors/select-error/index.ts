import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileError = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.error || ''
);
