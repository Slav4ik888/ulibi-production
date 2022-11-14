import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileValidateErrors } from '.';
import { ValidateProfileError } from '../../types';


describe('selectProfileValidateErrors', () => {
  test('Return error', () => {
    const state: DeepPartial<State> = {
      profile: {
        ...STATE_PROFILE,
        validateError: [ValidateProfileError.INVALID_AGE]
      }
    };

    expect(selectProfileValidateErrors(state as State)).toEqual([ValidateProfileError.INVALID_AGE]);
  });

  test('State is undefined', () => {
    expect(selectProfileValidateErrors(undefined as unknown as State)).toEqual([]);
  });
});

// npm run test:unit select-profile-validate-errors.test.ts
