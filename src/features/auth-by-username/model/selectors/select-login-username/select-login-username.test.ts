import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectLoginUsername } from '.';


describe('selectLoginUsername', () => {
  test('Return username', () => {
    const
      login = {
        username : 'slava',
        password : '123',
        loading  : false,
        error    : ''
      },
      state: DeepPartial<State> = {
        login
      };

    expect(selectLoginUsername(state as State)).toEqual('slava');
  })
});

// npm run test:unit select-login-username.test.ts
