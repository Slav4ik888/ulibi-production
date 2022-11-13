import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { selectProfileForm } from '../../selectors';
import { Profile } from '../../types';



export const updateProfileData = createAsyncThunk<
  Profile, // то, что возвращает
  void,    // то, что принимает
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const
      { extra, rejectWithValue, getState } = thunkApi,
      formData = selectProfileForm(getState());

    try {
      const res = await extra.api.put<Profile>('/profile', formData);

      return res.data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in updateProfileData');
    }
  }
);
