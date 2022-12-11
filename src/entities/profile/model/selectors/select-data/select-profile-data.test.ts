import { StateSchema } from 'app/providers/store';
import { PROFILE, STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileData } from '.';


describe('selectProfileData', () => {
  test('Shoul return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileData(state as StateSchema)).toEqual(PROFILE);
  });

  test('Shoul work with undefined State', () => {
    expect(selectProfileData(undefined as unknown as StateSchema)).toEqual({});
  });

  test('Shoul work with empty State', () => {
    expect(selectProfileData({} as unknown as StateSchema)).toEqual({});
  });
});

// npm run test:unit select-profile-data.test.ts
