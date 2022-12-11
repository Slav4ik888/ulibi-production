import { StateSchema } from 'app/providers/store';
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
      state: DeepPartial<StateSchema> = {
        login
      };

    expect(selectLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('State is undefined', () => {
    expect(selectLoginPassword(undefined as unknown as StateSchema)).toEqual('');
  });

  test('State is default', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginPassword(state as StateSchema)).toEqual('');
  });
});

// npm run test:unit select-login-password.test.ts
