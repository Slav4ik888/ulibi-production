import { loginReducer, loginActions, StateLogin } from '..';


describe('loginSlice', () => {
  test('set loading', () => {
    const state: DeepPartial<StateLogin> = { loading: false };

    expect(loginReducer(state as StateLogin, loginActions.loading())).toEqual({ loading: true });
  });

  test('set loadingOff', () => {
    const state: DeepPartial<StateLogin> = { loading: true };

    expect(loginReducer(state as StateLogin, loginActions.loadingOff())).toEqual({ loading: false });
  });

  test('set setError', () => {
    const state: DeepPartial<StateLogin> = { error: '' };

    expect(loginReducer(state as StateLogin, loginActions.setError('error nuh'))).toEqual({ error: 'error nuh' });
  });

  test('set clearError', () => {
    const state: DeepPartial<StateLogin> = { error: 'error nuh' };

    expect(loginReducer(state as StateLogin, loginActions.clearError())).toEqual({ error: '' });
  });

  test('set setUsername', () => {
    const state: DeepPartial<StateLogin> = { username: 'user1' };

    expect(loginReducer(state as StateLogin, loginActions.setUsername('Slava'))).toEqual({ username: 'Slava' });
  });

  test('set setPassword', () => {
    const state: DeepPartial<StateLogin> = { password: '123' };

    expect(loginReducer(state as StateLogin, loginActions.setPassword('123456'))).toEqual({ password: '123456' });
  });

  test('set clearUsernamePassword', () => {
    const state: DeepPartial<StateLogin> = { username: 'Slave', password: '123' };

    expect(loginReducer(state as StateLogin, loginActions.clearUsernamePassword())).toEqual({ username: '', password: '' });
  });
});

// npm run test:unit login-slice.test.ts
