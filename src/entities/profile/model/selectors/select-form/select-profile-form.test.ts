import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileForm } from '.';


describe('selectProfileForm', () => {
  test('Return form', () => {
    const state: DeepPartial<State> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileForm(state as State)).toEqual({});
  });

  test('State is undefined', () => {
    expect(selectProfileForm(undefined as unknown as State)).toEqual({});
  });
});

// npm run test:unit select-profile-form.test.ts
