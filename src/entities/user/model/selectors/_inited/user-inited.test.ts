import { StateSchema } from 'app/providers/store';
import { selectUserInited } from '.';


describe('selectUserInited', () => {
  test('Return authData', () => {
    const
      _inited = true,
      state: DeepPartial<StateSchema> = {
        user: { _inited }
      };

    expect(selectUserInited(state as StateSchema)).toEqual(_inited);
  });
});

// npm run test:unit user-inited.test.ts
