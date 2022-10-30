import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectLoginLoading } from '.';
import { StateLogin } from '../..';


describe('selectLoginLoading', () => {
  test('Return loading', () => {
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

    expect(selectLoginLoading(state as State)).toEqual(false);
  });

  test('State is undefined', () => {
    expect(selectLoginLoading(undefined)).toEqual(undefined);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectLoginLoading(state as State)).toEqual(undefined);
  });
});

// npm run test:unit select-login-loading.test.ts
