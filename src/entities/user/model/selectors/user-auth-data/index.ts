import { State } from 'app/providers/store';

export const selectUserAuthData = (state: State) => state.user.authData;
