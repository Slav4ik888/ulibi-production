import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectUserAuthData } from '.';
import { User } from '../..';


describe('selectUserAuthData', () => {
  test('Return authData', () => {
    const
      authData: User = {
        id: '1',
        username: 'Slava'
      },
      state: DeepPartial<State> = {
        user: { authData }
      };

    expect(selectUserAuthData(state as State)).toEqual(authData);
  });
});

// npm run test:unit user-auth-data.test.ts
