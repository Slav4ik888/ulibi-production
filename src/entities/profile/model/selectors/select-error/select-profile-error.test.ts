import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileError } from '.';


describe('selectProfileError', () => {
  test('Return error', () => {
    const state: DeepPartial<State> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileError(state as State)).toEqual('');
  });

  test('State is undefined', () => {
    expect(selectProfileError(undefined as unknown as State)).toEqual('');
  });
});

// npm run test:unit select-profile-error.test.ts
