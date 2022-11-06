import { State } from 'app/providers/store';
import { StateProfile } from '../..';

export const selectStateProfile = (state: State) => state?.profile || {} as StateProfile;
