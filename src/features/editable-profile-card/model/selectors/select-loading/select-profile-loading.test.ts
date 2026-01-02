import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileLoading } from '.';


describe('selectProfileLoading', () => {
  test('Return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileLoading(state as StateSchema)).toEqual(false);
  });

  test('State is undefined', () => {
    expect(selectProfileLoading(undefined as unknown as StateSchema)).toEqual(false);
  });
});

// npm run test:unit select-profile-loading.test.ts
