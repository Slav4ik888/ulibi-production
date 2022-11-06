import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests';
import { userActions } from 'entities/user';
import { User } from 'entities/user/model';
import { loginByUsername } from '..';


// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, { shallow: true });



describe('loginByUsername', () => {
  // let
  //   dispatch : Dispatch,
  //   getState : () => State;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('Succes login', async () => {
  //   const userValue: User = {
  //     id       : '123',
  //     username : '123'
  //   };

  //   // @ts-ignore
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

  //   const
  //     action = loginByUsername({ username: '123', password: '123' }),
  //     result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });


  // test('Error login', async () => {
  //   // @ts-ignore
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //   const
  //     action = loginByUsername({ username: '123', password: '123' }),
  //     result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('Ввели не верный логин или пароль');
  // });

  test('Succes login', async () => {
    const userValue: User = {
      id       : '123',
      username : '123'
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    // @ts-ignore
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });


  test('Error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    // @ts-ignore
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Ввели не верный логин или пароль');
  });
});


// npm run test:unit login-by-username.test.ts
