import { loginReducer, loginActions, LoginSchema } from '..';


describe('loginSlice', () => {
  test('set loading', () => {
    const state: DeepPartial<LoginSchema> = { loading: false };

    expect(loginReducer(state as LoginSchema, loginActions.loading())).toEqual({ loading: true });
  });

  test('set loadingOff', () => {
    const state: DeepPartial<LoginSchema> = { loading: true };

    expect(loginReducer(state as LoginSchema, loginActions.loadingOff())).toEqual({ loading: false });
  });

  test('set setError', () => {
    const state: DeepPartial<LoginSchema> = { error: '' };

    expect(loginReducer(state as LoginSchema, loginActions.setError('error nuh'))).toEqual({ error: 'error nuh' });
  });

  test('set clearError', () => {
    const state: DeepPartial<LoginSchema> = { error: 'error nuh' };

    expect(loginReducer(state as LoginSchema, loginActions.clearError())).toEqual({ error: '' });
  });

  test('set setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user1' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Slava'))).toEqual({ username: 'Slava' });
  });

  test('set setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123456'))).toEqual({ password: '123456' });
  });

  test('set clearUsernamePassword', () => {
    const state: DeepPartial<LoginSchema> = { username: 'Slave', password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.clearUsernamePassword())).toEqual({ username: '', password: '' });
  });
});

// npm run test:unit login-slice.test.ts
