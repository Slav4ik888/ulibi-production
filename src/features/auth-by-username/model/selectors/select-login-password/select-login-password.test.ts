import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectLoginPassword } from '.';


describe('selectLoginPassword', () => {
  test('Return password', () => {
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

    expect(selectLoginPassword(state as State)).toEqual('123');
  })
});

// npm run test:unit select-login-password.test.ts
