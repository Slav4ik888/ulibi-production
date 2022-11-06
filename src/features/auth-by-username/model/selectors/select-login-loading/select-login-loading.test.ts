import { State } from 'app/providers/store';
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
      state: DeepPartial<State> = {
        login
      };

    expect(selectLoginLoading(state as State)).toEqual(false);
  });

  test('State is undefined', () => {
    expect(selectLoginLoading(undefined as unknown as State)).toEqual(false);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectLoginLoading(state as State)).toEqual(false);
  });
});

// npm run test:unit select-login-loading.test.ts
