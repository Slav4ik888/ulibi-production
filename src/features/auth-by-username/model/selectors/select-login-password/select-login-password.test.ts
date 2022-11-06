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
  });

  test('State is undefined', () => {
    expect(selectLoginPassword(undefined as unknown as State)).toEqual('');
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectLoginPassword(state as State)).toEqual('');
  });
});

// npm run test:unit select-login-password.test.ts
