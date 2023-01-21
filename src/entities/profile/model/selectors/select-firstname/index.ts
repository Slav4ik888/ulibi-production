import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';

export const selectProfileFirstName = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.data?.firstname || ''
);
