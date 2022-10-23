import { createSelector } from '@reduxjs/toolkit';
import { StateLogin } from '../../types';
import { selectLoginState } from '../select-login-state';


export const selectLoginPassword = createSelector(
  selectLoginState,
  (login: StateLogin) => login.password
);
