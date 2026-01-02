import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileError } from '.';


describe('selectProfileError', () => {
  test('Return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...STATE_PROFILE,
        error: 'Error nuh'
      }
    };

    expect(selectProfileError(state as StateSchema)).toEqual('Error nuh');
  });

  test('State is undefined', () => {
    expect(selectProfileError(undefined as unknown as StateSchema)).toEqual('');
  });
});

// npm run test:unit select-profile-error.test.ts
