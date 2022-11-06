import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectStateProfile } from '.';


describe('selectStateProfile', () => {
  test('Return state profile', () => {
    const
      profile = STATE_PROFILE,
      state: DeepPartial<State> = {
        profile
      };

    expect(selectStateProfile(state as State)).toEqual(profile);
  });

  test('State is undefined', () => {
    expect(selectStateProfile(undefined as unknown as State)).toEqual(undefined);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectStateProfile(state as State)).toEqual(undefined);
  });
});

// npm run test:unit select-state-profile.test.ts
