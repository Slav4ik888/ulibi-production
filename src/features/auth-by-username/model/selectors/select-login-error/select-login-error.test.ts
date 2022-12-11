import { StateSchema } from 'app/providers/store';
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
      state: DeepPartial<StateSchema> = {
        login
      };

    expect(selectLoginError(state as StateSchema)).toEqual('fuck');
  });

  test('State is undefined', () => {
    expect(selectLoginError(undefined as unknown as StateSchema)).toEqual('');
  });
});

// npm run test:unit select-login-error.test.ts
