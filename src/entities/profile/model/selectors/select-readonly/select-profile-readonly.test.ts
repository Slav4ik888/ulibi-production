import { State } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileReadonly } from '.';


describe('selectProfileReadonly', () => {
  test('Return readonly', () => {
    const state: DeepPartial<State> = {
      profile: {
        ...STATE_PROFILE,
        readonly: true
      }
    };

    expect(selectProfileReadonly(state as State)).toEqual(true);
  });

  test('State is undefined', () => {
    expect(selectProfileReadonly(undefined as unknown as State)).toEqual(false);
  });
});

// npm run test:unit select-profile-readonly.test.ts
