import { createSelector } from '@reduxjs/toolkit';
import { StateLogin } from '../../types';
import { selectStateLogin } from '../select-state-login';


export const selectLoginUsername = createSelector(
  selectStateLogin,
  (login: StateLogin) => login?.username || ''
);
