import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileValidateErrors } from '.';
import { ValidateProfileError } from '../../types';


describe('selectProfileValidateErrors', () => {
  test('Return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...STATE_PROFILE,
        validateError: [ValidateProfileError.INVALID_AGE]
      }
    };

    expect(selectProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INVALID_AGE]);
  });

  test('StateSchema is undefined', () => {
    expect(selectProfileValidateErrors(undefined as unknown as StateSchema)).toEqual([]);
  });
});

// npm run test:unit select-profile-validate-errors.test.ts
