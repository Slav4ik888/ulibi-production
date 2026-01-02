import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types';
import { selectStateProfile } from '../select-state-profile';


export const selectProfileLoading = createSelector(
  selectStateProfile,
  (stateProfile: ProfileSchema) => stateProfile?.loading || false
);
