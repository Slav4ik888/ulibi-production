import { Profile, StateProfile } from 'entities/profile';
import { PROFILE } from './profile';


export const STATE_PROFILE: StateProfile = {
  data     : PROFILE,
  form     : {} as Profile,
  readonly : false,
  loading  : false,
  error    : ''
};

export const STATE_PROFILE_EMPTY_DATA: StateProfile = {
  data     : {} as Profile,
  form     : {} as Profile,
  readonly : false,
  loading  : false,
  error    : ''
};
