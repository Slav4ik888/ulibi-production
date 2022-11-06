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
  });

  test('State is undefined', () => {
    expect(selectLoginUsername(undefined as unknown as State)).toEqual('');
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectLoginUsername(state as State)).toEqual('');
  });
});

// npm run test:unit select-login-username.test.ts
