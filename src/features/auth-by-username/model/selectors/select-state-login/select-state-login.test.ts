import { State } from 'app/providers/store';
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
      state: DeepPartial<State> = {
        login
      };

    expect(selectStateLogin(state as State)).toEqual(login);
  });

  test('State is undefined', () => {
    expect(selectStateLogin(undefined as unknown as State)).toEqual({});
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectStateLogin(state as State)).toEqual({});
  });
});

// npm run test:unit select-state-login.test.ts
