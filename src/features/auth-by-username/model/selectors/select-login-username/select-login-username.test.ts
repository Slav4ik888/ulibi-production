import { StateSchema } from 'app/providers/store';
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
      state: DeepPartial<StateSchema> = {
        login
      };

    expect(selectLoginUsername(state as StateSchema)).toEqual('slava');
  });

  test('State is undefined', () => {
    expect(selectLoginUsername(undefined as unknown as StateSchema)).toEqual('');
  });

  test('State is default', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginUsername(state as StateSchema)).toEqual('');
  });
});

// npm run test:unit select-login-username.test.ts
