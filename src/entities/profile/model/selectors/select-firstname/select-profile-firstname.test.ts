import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileFirstName } from '.';


describe('selectProfileFirstName', () => {
  test('Return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileFirstName(state as StateSchema)).toEqual('Slava');
  });

  test('State is undefined', () => {
    expect(selectProfileFirstName(undefined as unknown as StateSchema)).toEqual('');
  });
});

// npm run test:unit select-profile-firstname.test.ts
