import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { User, userActions } from 'entities/user/model';
import * as LS from 'shared/lib';


interface LoginByUsernameProps {
  username: string
  password: string
}


export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const res = await extra.api.post<User>('/login', authData);

      if (!res.data) throw new Error('Empty response');

      LS.setAuth(res.data);
      dispatch(userActions.setAuthData(res.data));
      // @ts-ignore
      extra?.navigate('/about');

      return res.data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Ввели не верный логин или пароль');
    }
  }
);
