import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { UserRole } from '../types';


export const selectUserRoles = (state: StateSchema) => state.user?.authData?.roles || [];

export const isUserAdmin = createSelector(selectUserRoles, (roles: UserRole[]) => roles.includes(UserRole.ADMIN));
export const isUserManager = createSelector(selectUserRoles, (roles: UserRole[]) => roles.includes(UserRole.MANAGER));
