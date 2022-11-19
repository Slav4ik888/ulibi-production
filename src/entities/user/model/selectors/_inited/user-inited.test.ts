import { State } from 'app/providers/store';
import { selectUserInited } from '.';


describe('selectUserInited', () => {
  test('Return authData', () => {
    const
      _inited = true,
      state: DeepPartial<State> = {
        user: { _inited }
      };

    expect(selectUserInited(state as State)).toEqual(_inited);
  });
});

// npm run test:unit user-inited.test.ts
