import { StateSchema } from 'app/providers/store';
import { selectUserAuthData } from '.';
import { User } from '../..';


describe('selectUserAuthData', () => {
  test('Return authData', () => {
    const
      authData: User = {
        id: '1',
        username: 'Slava'
      },
      state: DeepPartial<StateSchema> = {
        user: { authData }
      };

    expect(selectUserAuthData(state as StateSchema)).toEqual(authData);
  });
});

// npm run test:unit user-auth-data.test.ts
