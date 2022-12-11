import { StateSchema } from 'app/providers/store';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
