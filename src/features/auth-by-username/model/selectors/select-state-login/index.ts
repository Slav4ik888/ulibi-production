import { StateSchema } from 'app/providers/store';
import { StateLogin } from '../..';

export const selectStateLogin = (state: StateSchema) => state?.login || {} as StateLogin;
