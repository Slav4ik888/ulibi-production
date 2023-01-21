import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types';
import { selectStateLogin } from '../select-state-login';


export const selectLoginUsername = createSelector(
  selectStateLogin,
  (login: LoginSchema) => login?.username || ''
);
