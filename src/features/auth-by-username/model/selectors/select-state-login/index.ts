import { State } from 'app/providers/store';
import { StateLogin } from '../..';

export const selectStateLogin = (state: State) => state?.login || {} as StateLogin;
