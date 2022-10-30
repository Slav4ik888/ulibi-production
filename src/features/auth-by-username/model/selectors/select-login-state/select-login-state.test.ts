import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectLoginState } from '..';


describe('selectLoginState', () => {
  test('Return state login', () => {
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

    expect(selectLoginState(state as State)).toEqual(login);
  });

  test('State is undefined', () => {
    expect(selectLoginState(undefined)).toEqual(undefined);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectLoginState(state as State)).toEqual(undefined);
  });
});

// npm run test:unit select-login-state.test.ts
