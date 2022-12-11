import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileForm } from '.';


describe('selectProfileForm', () => {
  test('Return form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileForm(state as StateSchema)).toEqual({});
  });

  test('StateSchema is undefined', () => {
    expect(selectProfileForm(undefined as unknown as StateSchema)).toEqual({});
  });
});

// npm run test:unit select-profile-form.test.ts
