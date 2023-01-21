import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileReadonly = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.readonly || false
);
