import { State } from 'app/providers/store';
import { StateProfile } from '../../types';

export const selectStateProfile = (state: State) => state?.profile || {} as StateProfile;
