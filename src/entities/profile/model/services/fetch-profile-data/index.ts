import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from '../../types';



export const fetchProfileData = createAsyncThunk<
  Profile, // то, что возвращает
  string,  // то, что принимает
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (userId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Profile>(`/profiles/${userId}`);

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchProfileData');
    }
  }
);
