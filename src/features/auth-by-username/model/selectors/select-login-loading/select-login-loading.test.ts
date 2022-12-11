import { StateSchema } from 'app/providers/store';
import { selectLoginLoading } from '.';


describe('selectLoginLoading', () => {
  test('Return loading', () => {
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

    expect(selectLoginLoading(state as StateSchema)).toEqual(false);
  });

  test('State is undefined', () => {
    expect(selectLoginLoading(undefined as unknown as StateSchema)).toEqual(false);
  });

  test('State is default', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginLoading(state as StateSchema)).toEqual(false);
  });
});

// npm run test:unit select-login-loading.test.ts
