import { StateSchema } from 'app/providers/store';
import { selectStateLogin } from '..';


describe('selectStateLogin', () => {
  test('Return state login', () => {
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

    expect(selectStateLogin(state as StateSchema)).toEqual(login);
  });

  test('State is undefined', () => {
    expect(selectStateLogin(undefined as unknown as StateSchema)).toEqual({});
  });

  test('State is default', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectStateLogin(state as StateSchema)).toEqual({});
  });
});

// npm run test:unit select-state-login.test.ts
