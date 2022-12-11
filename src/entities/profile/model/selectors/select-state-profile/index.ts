import { StateSchema } from 'app/providers/store';
import { StateProfile } from '../../types';

export const selectStateProfile = (state: StateSchema) => state?.profile || {} as StateProfile;
