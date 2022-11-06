import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from '../..';



export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const res = await extra.api.get<Profile>('/profile');


      return res.data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchProfileData');
    }
  }
);
