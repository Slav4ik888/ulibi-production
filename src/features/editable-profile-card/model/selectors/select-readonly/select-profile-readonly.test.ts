import { StateSchema } from 'app/providers/store';
import { STATE_PROFILE } from 'shared/lib/tests/__mocks__';
import { selectProfileReadonly } from '.';


describe('selectProfileReadonly', () => {
  test('Return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...STATE_PROFILE,
        readonly: true
      }
    };

    expect(selectProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('State is undefined', () => {
    expect(selectProfileReadonly(undefined as unknown as StateSchema)).toEqual(false);
  });
});

// npm run test:unit select-profile-readonly.test.ts
