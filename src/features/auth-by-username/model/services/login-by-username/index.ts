import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/user/model';
import * as LS from 'shared/lib';


interface LoginByUsernameProps {
  username: string
  password: string
}


export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const res = await axios.post<User>('http://localhost:8000/login', authData);

      if (!res.data) throw new Error('Empty response');

      LS.setAuth(res.data);
      thunkAPI.dispatch(userActions.setAuthData(res.data));
      return res.data;
    }
    catch (e) {
      console.log('e: ', e);
      return thunkAPI.rejectWithValue('Ввели не верный логин или пароль');
    }
  }
);
