import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from '../../types';



export const fetchProfileData = createAsyncThunk<
  Profile, // то, что возвращает
  void,    // то, что принимает
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Profile>('/profile');

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchProfileData');
    }
  }
);
