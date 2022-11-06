import { State } from 'app/providers/store';
import { PROFILE, STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileData } from '.';


describe('selectProfileData', () => {
  test('Return error', () => {
    const state: DeepPartial<State> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileData(state as State)).toEqual(PROFILE);
  });

  test('State is undefined', () => {
    expect(selectProfileData(undefined as unknown as State)).toEqual({});
  });
});

// npm run test:unit select-profile-data.test.ts