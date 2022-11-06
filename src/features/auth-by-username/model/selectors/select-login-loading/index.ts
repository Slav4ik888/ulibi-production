import { createSelector } from '@reduxjs/toolkit';
import { StateLogin } from '../../types';
import { selectStateLogin } from '../select-state-login';


export const selectLoginLoading = createSelector(
  selectStateLogin,
  (login: StateLogin) => login?.loading || false
);
