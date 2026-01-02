import { Profile } from 'entities/profile';
import { ProfileSchema } from 'features/editable-profile-card';
import { PROFILE } from './profile';



export const STATE_PROFILE: ProfileSchema = {
  data     : PROFILE,
  form     : {} as Profile,
  readonly : false,
  loading  : false,
  error    : ''
};

export const STATE_PROFILE_EMPTY_DATA: ProfileSchema = {
  data     : {} as Profile,
  form     : {} as Profile,
  readonly : false,
  loading  : false,
  error    : ''
};
