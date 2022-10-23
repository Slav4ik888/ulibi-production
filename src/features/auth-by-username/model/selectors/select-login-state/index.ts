import { State } from 'app/providers/store';

export const selectLoginState = (state: State) => state?.login;
