import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectStateProfile } from '.';


describe('selectStateProfile', () => {
  test('Return state profile', () => {
    const
      profile = STATE_PROFILE,
      state: DeepPartial<StateSchema> = {
        profile
      };

    expect(selectStateProfile(state as StateSchema)).toEqual(profile);
  });

  test('State is undefined', () => {
    expect(selectStateProfile(undefined as unknown as StateSchema)).toEqual({});
  });

  test('State is default', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectStateProfile(state as StateSchema)).toEqual({});
  });
});

// npm run test:unit select-state-profile.test.ts
