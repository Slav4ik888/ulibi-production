import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileLoading } from '.';


describe('selectProfileLoading', () => {
  test('Return error', () => {
    const state: DeepPartial<State> = {
      profile: STATE_PROFILE
    };

    expect(selectProfileLoading(state as State)).toEqual(false);
  });

  test('State is undefined', () => {
    expect(selectProfileLoading(undefined as unknown as State)).toEqual(false);
  });
});

// npm run test:unit select-profile-loading.test.ts
