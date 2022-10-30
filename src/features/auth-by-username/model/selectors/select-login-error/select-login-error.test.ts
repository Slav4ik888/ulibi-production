import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectLoginError } from '.';


describe('selectLoginError', () => {
  test('Return error', () => {
    const
      login = {
        username : 'slava',
        password : '123',
        loading  : false,
        error    : 'fuck'
      },
      state: DeepPartial<State> = {
        login
      };

    expect(selectLoginError(state as State)).toEqual('fuck');
  });

  test('State is undefined', () => {
    expect(selectLoginError(undefined)).toEqual(undefined);
  });
});

// npm run test:unit select-login-loading.test.ts
