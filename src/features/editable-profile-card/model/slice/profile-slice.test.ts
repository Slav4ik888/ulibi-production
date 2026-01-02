import { PROFILE } from 'shared/lib/tests/__mocks__';
import { profileReducer, profileActions } from '.';
import { updateProfileData } from '../services';
import { ProfileSchema, ValidateProfileError } from '../types';
import { Profile } from 'entities/profile';



const state: DeepPartial<ProfileSchema> = {
  loading  : false,
  readonly : false,
  data     : {},
  form     : {
    firstname : 'Gomes',
    lastname  : 'Korzan'
  },
  validateError: [ValidateProfileError.SERVER_ERROR]
};

describe('profileSlice', () => {
  test('setReadonly', () => {
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    ))
      .toEqual({ ...state, readonly: true });
  });


  test('updateProfile', () => {
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ firstname: 'Slava' } as Profile)
    ))
      .toEqual({
        ...state,
        form: {
          ...state.form,
          firstname: 'Slava'
        }
      });
  });


  test('cancelEdit', () => {
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    ))
      .toEqual({
        ...state,
        readonly      : true,
        form          : {},
        validateError : []
      });
  });


  test('test updae profile service pending', () => {
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    ))
      .toEqual({
        ...state,
        loading       : true,
        error         : '',
        validateError : []
      });
  });


  test('test updae profile service fulfilled', () => {
    expect(profileReducer(
      {
        ...state as ProfileSchema,
        loading: true
      },
      updateProfileData.fulfilled(PROFILE, '')
    ))
      .toEqual({
        ...state,
        data          : PROFILE,
        form          : PROFILE,
        loading       : false,
        readonly      : true,
        error         : ''
      });
  });
});

// npm run test:unit profile-slice.test.ts
