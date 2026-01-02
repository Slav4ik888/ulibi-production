import { StateSchema } from 'app/providers/store';
import { ProfileSchema } from '../../types';

export const selectStateProfile = (state: StateSchema) => state?.profile || {} as ProfileSchema;
