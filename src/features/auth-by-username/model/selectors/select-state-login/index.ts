import { StateSchema } from 'app/providers/store';
import { LoginSchema } from '../..';

export const selectStateLogin = (state: StateSchema) => state?.login || {} as LoginSchema;
